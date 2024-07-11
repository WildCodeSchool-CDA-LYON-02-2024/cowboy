// src/components/CowboyStats.jsx
import { Box, Container, Typography } from "@mui/material";
import Heart from "../../assets/images/cowboys/heart.png";
import Jacket from "../../assets/images/cowboys/jacket.png";
import Magnum from "../../assets/images/cowboys/magnum.png";

export default function CowboyStats({ stats }) {
  return (
    <Container
      sx={{
        pt: "0.3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.3rem",
        textShadow:
          "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          component="img"
          src={Heart}
          alt="Life"
          sx={{ height: "0.8rem", width: "0.8rem" }}
        />
        <Typography
          align="center"
          sx={{ width: "50%", fontFamily: "Pixelify", fontSize: "0.7rem" }}
        >
          {stats.life}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          component="img"
          src={Magnum}
          alt="Damage"
          sx={{ height: "0.8rem", width: "1rem" }}
        />
        <Typography
          align="center"
          sx={{ width: "50%", fontFamily: "Pixelify", fontSize: "0.7rem" }}
        >
          {stats.damage}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          component="img"
          src={Jacket}
          alt="Resistance"
          sx={{ height: "0.8rem", width: "0.8rem" }}
        />
        <Typography
          align="center"
          sx={{ width: "50%", fontFamily: "Pixelify", fontSize: "0.7rem" }}
        >
          {stats.resistance}
        </Typography>
      </Box>
    </Container>
  );
}
