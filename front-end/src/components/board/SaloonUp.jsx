import { Box, Button, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import fleche from "../../assets/images/fleche-verte.png";
import RessourcesForUp from "../../components/ressources/RessourcesForUp.jsx";
import { usePlayerContext } from "../../context/PlayerContext.jsx";
import { upgradeBuilding } from "../../services/BuildingService.js";
import {
  checkIfCanUpgrade,
  removeResourcesForUpgrade,
  resourceTiers,
  updatePlayerResources,
} from "../../services/ResourceService.js";
import { reducTiers } from "../../services/StatsService.js";

export default function SaloonUp({
  building,
  buildingTypeId,
  playerResources,
}) {
  const { playerData } = usePlayerContext();

  const [canUpgrade, setCanUpgrade] = useState(false);

  useEffect(() => {
    setCanUpgrade(checkIfCanUpgrade(playerResources, building.level));
  }, [building.level, playerResources]);

  const handleUpgrade = async () => {
    try {
      if (!playerData || !playerData.token) {
        console.error("Player data or token missing.");
        return;
      }

      const canUpgradeResult = checkIfCanUpgrade(
        playerResources,
        building.level
      );

      if (!canUpgradeResult.canUpgrade) {
        console.error("Amélioration impossible:", canUpgradeResult.message);
        return;
      }

      const updatedBuilding = await upgradeBuilding(
        playerData.token,
        buildingTypeId
      );

      if (updatedBuilding.error) {
        console.error("Failed to upgrade building:", updatedBuilding.error);
        return;
      }

      console.log("Building upgraded successfully:", updatedBuilding);

      // Calculer les ressources mises à jour nécessaires
      const updatedResources = removeResourcesForUpgrade(
        playerResources,
        building.level,
        resourceTiers
      );

      if (!updatedResources) {
        console.error("Updated resources is undefined or null.");
        return;
      }

      // Mettre à jour les ressources du joueur avec les nouvelles valeurs
      const updatedPlayerResources = await updatePlayerResources(
        playerData.token,
        updatedResources
      );

      console.log(
        "Player resources updated successfully:",
        updatedPlayerResources
      );
    } catch (err) {
      console.error("Failed to upgrade building:", err);
    }
  };

  const stats = reducTiers.find((tier) => tier.level === building.level);

  if (!stats) {
    return null; // Gestion de cas où le niveau n'est pas trouvé
  }

  const { reducBonus } = stats;

  // Recherche des statistiques de vitesse de déplacement pour le niveau suivant
  const nextLevelStats = reducTiers.find(
    (tier) => tier.level === building.level + 1
  );

  return (
    <Container disableGutters>
      <Box
        sx={{
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            fontSize: "1.3rem",
            display: "flex",
          }}
        >
          lvl:{" "}
          <span style={{ color: "#33E264", display: "flex", width: "50%" }}>
            {building.level}{" "}
            <Box
              component="img"
              src={fleche}
              sx={{
                height: "1.2rem",
                mt: "0.4rem",
                ml: "0.3rem",
                mr: "0.3rem",
              }}
            />{" "}
            {building.level + 1}
          </span>{" "}
          {/*Passer les valeurs via props du cmpnt parent "BoardContainer" */}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "1.5rem 0.5rem 0.5rem 0.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
            width: "90%",
          }}
        >
          Réduit le coût de recrutement des nouveaux cow-boys
        </Typography>
        <Typography
          sx={{
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            pt: "1rem",
          }}
        >
          Coût de recrutement:{" "}
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#33E264",
              marginLeft: "0.3rem",
            }}
          >
            {" "}
            -{reducBonus}%{"  "}
            <Box
              component="img"
              src={fleche}
              sx={{
                height: "0.7rem",
                mt: "0.4rem",
                ml: "0.3rem",
                mr: "0.3rem",
              }}
            />
            {"  "}
            {nextLevelStats && `-${nextLevelStats.reducBonus}%`}
          </span>{" "}
          {/*Passer les valeurs via props du cmpnt parent "BoardContainer" */}
        </Typography>
      </Box>

      <RessourcesForUp level={building.level} />

      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
        <Button
          variant="contained"
          sx={{
            width: "60%",
            backgroundColor: "#1D1C1C",
            "&:hover": {
              backgroundColor: "#333333",
            },
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
          }}
          type="submit"
          onClick={handleUpgrade}
          disabled={!canUpgrade}
        >
          AMÉLIORER
        </Button>
      </Box>
    </Container>
  );
}
SaloonUp.propTypes = {
  building: PropTypes.object.isRequired,
  buildingTypeId: PropTypes.number.isRequired,
  playerResources: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
