import { Box, Container, Paper, Typography } from "@mui/material";
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
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "90%",
          height: "90%",
          borderRadius: "1rem",
          backgroundColor: "rgb(29,28,28,80%)",
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
