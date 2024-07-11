import { Box, Container, Paper, Typography } from "@mui/material";
import BarilletImg from "../../assets/images/barillet-sbg.png";
// import ShopCardContainer from "./ShopCardContainer";
import BanditCpnt from "./BanditCpnt";
import BruteCpnt from "./BruteCpnt";
import PisteurCpnt from "./PisteurCpnt";
import PrimeCpnt from "./PrimeCpnt";

export default function ShopContainer() {
  return (
    <Container
      component="section"
      disableGutters
      sx={{
        height: "90%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: "2rem",
        backgroundColor: "#565656",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "9vh",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            display: "flex",
            color: "white",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          }}
        >
          SAL{" "}
          <span>
            <Box
              component="img"
              src={BarilletImg}
              alt="barillet"
              sx={{ width: "3rem", height: "3rem", mt: "0.7rem" }}
            />
          </span>
          <span>
            <Box
              component="img"
              src={BarilletImg}
              alt="barillet"
              sx={{ width: "3rem", height: "3rem", mt: "0.7rem", ml: "0.3rem" }}
            />
          </span>
          N{" "}
        </Typography>
      </Box>
      <Paper
        sx={{
          width: "90%",
          height: "85%",
          borderRadius: "1rem",
          backgroundColor: "rgb(29,28,28,80%)",
          mt: "6rem",
        }}
      >
        <Box
          sx={{
            height: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              p: "0.5rem",
              fontSize: "2rem",
              fontFamily: "Pixelify",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              color: "white",
            }}
          >
            RECRUTEZ VOS COWBOYS
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              p: "0.5rem",
              fontFamily: "Pixelify",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              color: "white",
            }}
          >
            CHOISISSEZ UNE CATÉGORIE
          </Typography>
        </Box>
        <Box
          sx={{
            height: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <BanditCpnt />
          <BruteCpnt />
          <PrimeCpnt />
          <PisteurCpnt />
        </Box>
      </Paper>
    </Container>
  );
}
