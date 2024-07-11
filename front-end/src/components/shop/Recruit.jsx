import { Box, Button, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import BigCanyon from "../../assets/images/big-canyon-pix.jpeg";
import Cowboy1 from "../../assets/images/cowboys/cowboy-pix-sbg.png";
import Cowboy2 from "../../assets/images/cowboys/cowboy2-pix.png";
import Cowboy3 from "../../assets/images/cowboys/cowboy3-pix-sbg.png";
import Cowboy4 from "../../assets/images/cowboys/cowboy4-pix-sbg.png";
import Gold from "../../assets/images/ressources/pepite-or.png";
import { usePlayerContext } from "../../context/PlayerContext";
import { recruitCowboys } from "../../services/CowboyService.js";

export default function Recruit({ cowboy, onBack }) {
  const { id, name } = cowboy;
  const { playerData } = usePlayerContext();

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

  const handleRecruit = async () => {
    try {
      if (playerData && playerData.token) {
        await recruitCowboys(playerData.token, id);
        onBack();
      }
    } catch (err) {
      console.error("Failed to recruit cowboy:", err);
      alert("Failed to recruit cowboy");
    }
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "0 0 1rem 1rem",
          backgroundColor: "rgb(29,28,28,10%)",
        }}
      >
        <Box
          sx={{
            height: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ml: "1rem",
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
              width: "2rem",
              height: "2rem",
              backgroundColor: "#B91818",
              padding: 0,
            }}
          >
            x
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            pt: "0.5rem",
            pl: "0.5rem",
            pr: "0.5rem",
            height: "15rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "0.5rem",
          }}
        >
          <Box
            component="img"
            src={BigCanyon}
            alt="Canyon"
            sx={{ height: "15rem", width: "100%", borderRadius: "0.5rem" }}
          />
          <Box
            component="img"
            src={cowboyImage}
            alt={name}
            sx={{
              height: "9rem",
              position: "relative",
              bottom: "9rem",
            }}
          />
        </Box>

        <Box
          sx={{
            height: "13rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Pixelify",
              color: "white",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            }}
          >
            {name}
          </Typography>
          <Typography
            align="center"
            sx={{
              fontFamily: "Pixelify",
              pt: "1rem",
              pr: "1rem",
              pl: "1rem",
              color: "white",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            }}
          >
            Ancien hors-la-loi cherchant à se racheter et à protéger sa famille
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              mt: "1rem",
            }}
          >
            <Typography
              sx={{
                pl: "0.5rem",
                fontFamily: "Pixelify",
                textShadow:
                  "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
                color: "white",
              }}
            >
              Coût: 100k
            </Typography>
            <Box
              component="img"
              src={Gold}
              alt="Pepite d'or"
              sx={{ height: "1rem", mt: "0.3rem" }}
            />
          </Box>
          <Button
            onClick={handleRecruit}
            variant="contained"
            sx={{
              mt: "1rem",
              backgroundColor: "#B91818",
              width: "80%",
              fontFamily: "Pixelify",
              color: "white",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              fontSize: "1.2rem",
            }}
          >
            RECRUTER
          </Button>
        </Box>
      </Paper>
    </>
  );
}
Recruit.propTypes = {
  cowboy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};
