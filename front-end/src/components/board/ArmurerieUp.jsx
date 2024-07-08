import { Box, Button, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import fleche from "../../assets/images/fleche-verte.png";
import RessourcesForUp from "../../components/ressources/RessourcesForUp.jsx";
import { usePlayerContext } from "../../context/PlayerContext.jsx";
import { upgradeBuilding } from "../../services/BuildingService.js";
import { attackDefenseTiers } from "../../services/StatsService.js";

export default function ArmurerieUp({
  building,
  buildingTypeId,
  // playerResources,
}) {
  const { playerData } = usePlayerContext();

  const handleUpgrade = async () => {
    try {
      if (playerData && playerData.token) {
        const updatedBuilding = await upgradeBuilding(
          playerData.token,
          buildingTypeId
        );
        console.log("Building upgraded successfully:", updatedBuilding);
      }
    } catch (err) {
      console.error("Failed to upgrade building:", err);
    }
  };

  const stats = attackDefenseTiers.find(
    (tier) => tier.level === building.level
  );

  if (!stats) {
    return null; // Gestion de cas où le niveau n'est pas trouvé
  }

  const { attackBonus, defenseBonus } = stats;

  const nextLevelStats = attackDefenseTiers.find(
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
          lvl:
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
          Augmente les statistiques d’attaque et défense
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Pixelify",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              color: "white",
              width: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Attaque:
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#33E264",
                width: "40%",
              }}
            >
              {" "}
              {attackBonus}%{"  "}
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
              {nextLevelStats && `${nextLevelStats.attackBonus}%`}
            </span>{" "}
            {/*Passer les valeurs via props du cmpnt parent "BoardContainer" */}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Pixelify",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              color: "white",
              width: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Défense:{" "}
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#33E264",
                width: "40%",
              }}
            >
              {" "}
              {defenseBonus}%{" "}
              <Box
                component="img"
                src={fleche}
                sx={{
                  height: "0.7rem",
                  mt: "0.4rem",
                  ml: "0.3rem",
                  mr: "0.3rem",
                }}
              />{" "}
              {nextLevelStats && `${nextLevelStats.defenseBonus}%`}
            </span>{" "}
            {/*Passer les valeurs via props du cmpnt parent "BoardContainer" */}
          </Typography>
        </Box>
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
          }}
          type="submit"
          onClick={handleUpgrade}
        >
          AMÉLIORER
        </Button>
      </Box>
    </Container>
  );
}
ArmurerieUp.propTypes = {
  building: PropTypes.object.isRequired,
  buildingTypeId: PropTypes.number.isRequired,
};
