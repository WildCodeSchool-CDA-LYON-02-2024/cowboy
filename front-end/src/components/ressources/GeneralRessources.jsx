import { Box, Container, Typography } from "@mui/material";
import Bois from "../../assets/images/ressources/buche-bois.png";
import Gold from "../../assets/images/ressources/pepite-or.png";
import Iron from "../../assets/images/ressources/steel.png";
import Stone from "../../assets/images/ressources/stone.png";

export default function GeneralRessources() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        zIndex: 2,
        position: "fixed",
        top: "4.2rem",
        pt: "0.3rem",
      }}
    >
      <Box
        sx={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
          border: "2px solid #565656",
          backgroundColor: "black",
        }}
      >
        <Box
          component="img"
          src={Bois}
          alt="Buche de bois"
          sx={{ height: "1.2rem", pl: "0.5rem" }}
        />
        <Typography
          sx={{
            width: "70%",
            pl: "0.2rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          116 k{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
          border: "2px solid #565656",
          backgroundColor: "black",
        }}
      >
        <Box
          component="img"
          src={Stone}
          alt="Pierre"
          sx={{ height: "1.2rem", mt: "0.1rem", pl: "0.1rem", width: "40%" }}
        />
        <Typography
          sx={{
            width: "70%",
            pl: "0.2rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          191 k{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
          border: "2px solid #565656",
          backgroundColor: "black",
        }}
      >
        <Box
          component="img"
          src={Iron}
          alt="Lingot de fer"
          sx={{ height: "0.75rem", mt: "0.1rem", pl: "0.3rem" }}
        />
        <Typography
          sx={{
            width: "70%",
            pl: "0.2rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          181 k{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
          border: "2px solid #565656",
          backgroundColor: "black",
        }}
      >
        <Box
          component="img"
          src={Gold}
          alt="Pepite d'or"
          sx={{ height: "1rem", mt: "0.1rem", pl: "0.2rem" }}
        />
        <Typography
          sx={{
            width: "70%",
            pl: "0.2rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          200 k{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
    </Container>
  );
}
