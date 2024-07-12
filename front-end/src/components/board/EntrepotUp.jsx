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
import { storageCapacityTiers } from "../../services/StatsService.js";

export default function EntrepotUp({
  building,
  buildingTypeId,
  playerResources,
  setUpdate,
  update,
}) {
  const { playerData } = usePlayerContext();

  const [canUpgrade, setCanUpgrade] = useState(false);
  const [buildingLevel, setBuildingLevel] = useState(building.level);
  const [displayLevel, setDisplayLevel] = useState(building.level);
  const [maxLevelReached, setMaxLevelReached] = useState(false);

  const maxLevel = 10;

  useEffect(() => {
    if (buildingLevel >= maxLevel) {
      setMaxLevelReached(true);
    } else {
      setMaxLevelReached(false);
      setCanUpgrade(checkIfCanUpgrade(playerResources, buildingLevel));
    }
  }, [buildingLevel, playerResources]);

  const handleUpgrade = async () => {
    try {
      if (!playerData || !playerData.token) {
        console.error("Player data or token missing.");
        return;
      }

      const canUpgradeResult = checkIfCanUpgrade(
        playerResources,
        buildingLevel
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
        buildingLevel,
        resourceTiers
      );

      if (!updatedResources) {
        console.error("Updated resources is undefined or null.");
        return;
      }

      setBuildingLevel((prevLevel) => prevLevel + 1);

      setDisplayLevel(buildingLevel + 1);

      // Mettre à jour les ressources du joueur avec les nouvelles valeurs
      const updatedPlayerResources = await updatePlayerResources(
        playerData.token,
        updatedResources
      );
      setUpdate(!update);
      console.log(
        "Player resources updated successfully:",
        updatedPlayerResources
      );
    } catch (err) {
      console.error("Failed to upgrade building:", err);
    }
  };

  const stats = storageCapacityTiers.find(
    (tier) => tier.level === buildingLevel
  );

  if (!stats) {
    return null; // Gestion de cas où le niveau n'est pas trouvé
  }

  const { storageCapacity } = stats;

  // Recherche des statistiques de vitesse de déplacement pour le niveau suivant
  const nextLevelStats = storageCapacityTiers.find(
    (tier) => tier.level === buildingLevel + 1
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
            {maxLevelReached ? (
              "MAX"
            ) : (
              <>
                {displayLevel}
                <Box
                  component="img"
                  src={fleche}
                  sx={{
                    height: "1.2rem",
                    mt: "0.4rem",
                    ml: "0.3rem",
                    mr: "0.3rem",
                  }}
                />
                {displayLevel + 1}
              </>
            )}
          </span>
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
            fontSize: "1.2rem",
          }}
        >
          {" "}
          Augmente la capacité de stockage de l&apos;entrepôt:
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: "1rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Pixelify",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            Capacité de stockage:{" "}
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#33E264",
                marginLeft: "0.3rem",
              }}
            >
              {" "}
              {storageCapacity}k{"  "}
              <Box
                component="img"
                src={fleche}
                sx={{
                  height: "0.9rem",
                  mt: "0.4rem",
                  ml: "0.3rem",
                  mr: "0.3rem",
                  display: maxLevelReached ? "none" : "",
                }}
              />
              {"  "}
              {nextLevelStats && `${nextLevelStats.storageCapacity}k`}
            </span>{" "}
            {/*Passer les valeurs via props du cmpnt parent "BoardContainer" */}
          </Typography>
        </Box>
      </Box>

      <RessourcesForUp level={buildingLevel} />

      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
        <Button
          variant="contained"
          sx={{
            width: "60%",
            backgroundColor: "#1D1C1C",
            "&.Mui-disabled": { backgroundColor: "rgb(29,28,28,30%)" },
            "&:hover": {
              backgroundColor: "#333333",
            },
            fontFamily: "Pixelify",
            textShadow: maxLevelReached
              ? ""
              : "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          }}
          type="submit"
          onClick={handleUpgrade}
          disabled={!canUpgrade || maxLevelReached}
        >
          AMÉLIORER
        </Button>
      </Box>
    </Container>
  );
}
EntrepotUp.propTypes = {
  building: PropTypes.object.isRequired,
  buildingTypeId: PropTypes.number.isRequired,
  playerResources: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setUpdate: PropTypes.func.isRequired,
  update: PropTypes.bool.isRequired,
};
