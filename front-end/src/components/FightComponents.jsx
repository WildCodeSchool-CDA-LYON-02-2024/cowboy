import { Box, Container, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Background from "../assets/images/westernhalf.jpg";
import victory from "../assets/sound/victory-1-90174.mp3";
import gunshotSound from "../assets/sound/gun-shot-1-176892.mp3";

export default function FightComponent() {
  const location = useLocation();
  const { cowboys } = location.state;
  const [winner, setWinner] = useState(null);
  const [fighting, setFighting] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [randomCowboy, setRandomCowboy] = useState(null);

  const fetchCowboydispo = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cowboy/dispo`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("can't fetch ");
        }
        return response.json();
      })
      .then((result) => {
        const randomIndex = Math.floor(Math.random() * result.length);
        setRandomCowboy(result[randomIndex]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleFight = () => {
    setFighting(true);

    let count = countdown;
    const countdownInterval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count === 0) {
        clearInterval(countdownInterval);

        const gunshotAudio = new Audio(gunshotSound);
        gunshotAudio.play();

        const randomWinner = Math.random() < 0.5 ? cowboys[0] : randomCowboy;

        setTimeout(() => {
          setWinner(randomWinner);
          setFighting(false);

          const victoryAudio = new Audio(victory);
          victoryAudio.play();
        }, 1000); // Delay before setting the winner and playing the victory sound
      }
    }, 1000);
  };

  useEffect(() => {
    fetchCowboydispo();
  }, []);

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
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
          objectFit: "cover",
        }}
      />
      {fighting && (
        <Typography
          variant="h1"
          sx={{
            zIndex: 1,
            color: "white",
            fontSize: "10rem",
            fontWeight: "bold",
            marginLeft: "20%",
          }}
        >
          {countdown}
        </Typography>
      )}
      {winner && (
        <Typography
          variant="h4"
          sx={{
            zIndex: 1,
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {winner.name} remporte le combat !
        </Typography>
      )}
      {!winner && (
        <Box
          sx={{
            marginTop: "40rem",
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleFight}
            disabled={fighting}
            sx={{
              zIndex: 1,
              position: "relative",
              marginTop: fighting ? "1rem" : 0,
            }}
          >
            {fighting ? "En cours..." : "Commencer le Combat"}
          </Button>
        </Box>
      )}
    </Container>
  );
}
