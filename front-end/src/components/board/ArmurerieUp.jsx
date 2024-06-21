import { Box, Button, Container, Typography } from "@mui/material";
import fleche from "../../assets/images/fleche-verte.png";
import RessourcesForUp from "../../components/ressources/RessourcesForUp.jsx";

export default function ArmurerieUp() {
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
            10{" "}
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
            11
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
              10%{"  "}
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
              14%
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
              10%{" "}
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
              14%
            </span>{" "}
            {/*Passer les valeurs via props du cmpnt parent "BoardContainer" */}
          </Typography>
        </Box>
      </Box>

      <RessourcesForUp />

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
          // type="submit"
        >
          AMÉLIORER
        </Button>
      </Box>
    </Container>
  );
}
