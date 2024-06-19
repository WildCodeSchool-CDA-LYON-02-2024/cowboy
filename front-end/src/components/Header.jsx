import { Box, Paper, Typography } from "@mui/material";
import logo from "../assets/images/LOGO.png";

export default function Header() {
  return (
    <Paper
      component="header"
      elevation={2}
      square
      sx={{
        height: "4rem",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1D1C1C",
        zIndex: 1,
        position: "fixed",
      }}
    >
      <Box sx={{ pl: "0.5rem" }}>
        <Typography
          sx={{
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
          }}
        >
          Username
          <br />
          lvl 100 {/**Appliquer le nom du joueur et le niveau */}
        </Typography>
      </Box>
      <Box
        component="img"
        src={logo}
        alt="Colt Legacy"
        sx={{ height: "80%" }}
      />
      <Box sx={{ pr: "0.5rem" }}>
        <Typography
          sx={{
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
          }}
        >
          Experience
          <br />
          2000/5000 {/**Appliquer l'experience du jouer */}
        </Typography>
      </Box>
    </Paper>
  );
}
