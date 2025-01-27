import { Box, Button, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import BigCanyon from "../../assets/images/big-canyon-pix.jpeg";
import CowboyUpgrade from "./CowboyUpgrade";
import Cowboy1 from "../../assets/images/cowboys/cowboy-pix-sbg.png";
import Cowboy2 from "../../assets/images/cowboys/cowboy2-pix.png";
import Cowboy3 from "../../assets/images/cowboys/cowboy3-pix-sbg.png";
import Cowboy4 from "../../assets/images/cowboys/cowboy4-pix-sbg.png";

export default function CowboyDetails({ cowboy, onBack }) {
  const { id, name } = cowboy;

  const cowboysImg = [
    {
      image: Cowboy1,
    },
    {
      image: Cowboy2,
    },
    {
      image: Cowboy3,
    },
    {
      image: Cowboy4,
    },
    {
      image: Cowboy3,
    },
    // Ajoutez autant de cowboys que nécessaire
  ];

  const cowboyImage = cowboysImg[id % cowboysImg.length].image;

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        color: "white",
        textShadow:
          "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
      }}
    >
      <Box
        sx={{
          width: "40%",
          height: "100%",
          backgroundImage: `url(${BigCanyon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={cowboyImage}
          alt={name}
          sx={{ height: "70%" }}
        />
      </Box>
      <Box
        component="section"
        sx={{ width: "60%", backgroundColor: "#1D1C1C" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "80%", pl: "0.5rem" }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "1.2rem", fontFamily: "Pixelify" }}
            >
              {name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontFamily: "Pixelify", color: "#B91818" }}
            >
              Légende
            </Typography>
            <Typography sx={{ fontFamily: "Pixelify" }}>lvl 67</Typography>
          </Box>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "flex-end",
              pr: "0.5rem",
              pt: "0.3rem",
            }}
          >
            <Button
              onClick={onBack}
              variant="contained"
              sx={{
                fontFamily: "Pixelify",
                fontSize: "1.3rem",
                fontWeight: 700,
                minWidth: "2rem",
                height: "2rem",
                backgroundColor: "#B91818",
                padding: 0,
              }}
            >
              x
            </Button>
          </Box>
        </Box>
        <Box component="section" sx={{ pt: "0.5rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              align="center"
              variant="subtitle2"
              sx={{
                fontFamily: "Pixelify",
                pl: "0.5rem",
                pr: "0.5rem",
              }}
            >
              Ancien hors-la-loi cherchant à se racheter et à protéger sa
              famille
            </Typography>
            <CowboyUpgrade />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

CowboyDetails.propTypes = {
  cowboy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};
