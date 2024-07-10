import { Box, Container } from "@mui/material";
import Background from "../assets/images/westernhalf.jpg";

export default function FightPage() {
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
      <Box
        component="img"
        src={Background}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fit",
        }}
      />
    </Container>
  );
}
