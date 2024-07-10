import { Box, Container, Typography } from "@mui/material";
import Barillet from "../assets/images/";

export default function TestPage() {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow:
          "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
      }}
    >
      <Typography variant="h3" sx={{ fontFamily: "Pixelify", pb: "1.5rem" }}>
        LOADING
      </Typography>
      <Box
        component="img"
        src={Barillet}
        sx={{
          animation: "spin 1.5s infinite",
          "@keyframes spin": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        }}
      />
    </Container>
  );
}
