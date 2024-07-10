import { Box, Container, Typography } from "@mui/material";
import Bois from "../../assets/images/ressources/buche-bois.png";
import Gold from "../../assets/images/ressources/pepite-or.png";
import Iron from "../../assets/images/ressources/steel.png";
import Stone from "../../assets/images/ressources/stone.png";
import { resourceTiers } from "../../services/ResourceService";
import PropTypes from "prop-types";

export default function RessourcesForUp({ level }) {
  const nextLevel = level + 1;
  const resources = resourceTiers.find((tier) => tier.level === nextLevel);

  if (!resources) {
    return null; // Gérer le cas où les ressources pour le niveau suivant ne sont pas disponibles
  }

  return (
    <Container
      sx={{
        mt: "0.5rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={Bois}
          alt="Buche de bois"
          sx={{ height: "1.5rem" }}
        />
        <Typography
          sx={{
            pl: "0.5rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          {resources[4]} k{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={Stone}
          alt="Pierre"
          sx={{ height: "1.2rem", mt: "0.2rem" }}
        />
        <Typography
          sx={{
            pl: "0.5rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          {resources[3]} k{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={Iron}
          alt="Lingot de fer"
          sx={{ height: "1rem", mt: "0.3rem" }}
        />
        <Typography
          sx={{
            pl: "0.5rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          {resources[2]} k{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={Gold}
          alt="Pepite d'or"
          sx={{ height: "1rem", mt: "0.3rem" }}
        />
        <Typography
          sx={{
            pl: "0.5rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          {resources[1]} k{" "}
        </Typography>
      </Box>
    </Container>
  );
}

RessourcesForUp.propTypes = {
  level: PropTypes.number.isRequired,
};
