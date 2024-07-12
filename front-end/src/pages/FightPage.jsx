import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CowboyStats from "../components/cowboys/CowboyStats";
import Canyon from "../assets/images/cowboys/canyon.png";
import Magnums from "../assets/images/navbar/double-magnum.png";
import { usePlayerContext } from "../context/PlayerContext";

const CardFight = () => {
  const [cowboys, setCowboys] = useState([]);
  const [selectedCowboy, setSelectedCowboy] = useState(null);
  const { playerData } = usePlayerContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCowboys = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/cowboy/player`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${playerData.token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const imagePaths = [
          "../../../src/assets/images/cowboys/cowboy-pix-sbg.png",
          "../../../src/assets/images/cowboys/cowboy2-pix.png",
          "../../../src/assets/images/cowboys/cowboy3-pix-sbg.png",
          "../../../src/assets/images/cowboys/cowboy4-pix-sbg.png",
          "../../../src/assets/images/cowboys/cowboy3-pix-sbg.png",
        ];

        const enhancedData = data.map((cowboy, index) => ({
          ...cowboy,
          image: imagePaths[index % imagePaths.length],
        }));

        setCowboys(enhancedData);
      } catch (err) {
        console.error("Network error:", err);
      }
    };
    if (playerData.token) {
      fetchCowboys();
    }
  }, [playerData.token]);

  const handleCardClick = (cowboy) => {
    setSelectedCowboy(selectedCowboy === cowboy ? null : cowboy);
  };

  const handleFight = () => {
    if (selectedCowboy) {
      navigate("/fightground", { state: { cowboys: [selectedCowboy] } });
    } else {
      alert("Veuillez sélectionner un cowboy pour le combat.");
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: "white",
        height: "auto",
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          marginTop: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "95%",
            marginTop: "8rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {cowboys.map((cowboy) => (
            <Card
              key={cowboy.id}
              sx={{
                height: "13rem",
                width: "8.3rem",
                border: selectedCowboy === cowboy
                  ? "3px solid #00FF00"
                  : "3px solid #B91818",
                backgroundColor: "#1D1C1C",
                padding: "0.15rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(cowboy)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Canyon}
                  sx={{ p: "0.2rem", borderRadius: "0.4rem", height: "55%" }}
                />
                <Box
                  component="img"
                  src={cowboy.image}
                  alt={cowboy.name}
                  sx={{
                    height: "5.5rem",
                    position: "relative",
                    bottom: "6rem",
                    left: "1.3rem",
                  }}
                />
                <Box
                  component="img"
                  src={Magnums}
                  alt="Bandit Class"
                  sx={{
                    height: "1rem",
                    pl: "0.2rem",
                    pr: "0.2rem",
                    pb: "0.2rem",
                    position: "relative",
                    bottom: "12.2rem",
                    backgroundColor: "#1D1C1C",
                    borderRadius: "0 0 0.2rem 0",
                  }}
                />
                <CardContent
                  sx={{
                    "&.MuiCardContent-root": { padding: 0 },
                    position: "relative",
                    bottom: "6.5rem",
                    textShadow:
                      "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
                    color: "white",
                  }}
                >
                  <Typography
                    align="center"
                    sx={{ fontFamily: "Pixelify", fontSize: "0.7rem" }}
                  >
                    {cowboy.name}
                  </Typography>{" "}
                  <Box sx={{ height: "5rem" }}>
                    <CowboyStats />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFight}
          disabled={!selectedCowboy}
          sx={{
            marginBottom: "5rem",
            marginTop: "3rem",
            border: "2px solid blue",
            color: "black",
          }}
        >
          Commencer le Combat
        </Button>
      </Box>
    </Container>
  );
};

export default CardFight;
