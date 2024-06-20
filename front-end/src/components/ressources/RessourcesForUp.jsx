import { Box, Container, Typography } from "@mui/material";
import Bois from "../../assets/images/ressources/buche-bois.png";
import Gold from "../../assets/images/ressources/pepite-or.png";
import Iron from "../../assets/images/ressources/steel.png";
import Stone from "../../assets/images/ressources/stone.png";

export default function RessourcesForUp() {
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
          11 k{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
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
          11 k{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
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
          11 k{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
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
          11 k{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
    </Container>
  );
}
