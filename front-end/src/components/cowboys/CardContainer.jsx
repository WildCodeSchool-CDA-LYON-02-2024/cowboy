import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import CowboyCard from "./CowboyCard";
import CowboyDetails from "./CowboyDetails";
import { usePlayerContext } from "../../context/PlayerContext";
import { fetchPlayerCowboy } from "../../services/CowboyService";

export default function CardContainer() {
  const [selectedCowboy, setSelectedCowboy] = useState(null);

  const { playerData } = usePlayerContext();

  const [playerCowboys, setPlayerCowboys] = useState([]);

  useEffect(() => {
    const fetchCowboys = async () => {
      try {
        if (playerData && playerData.token) {
          const result = await fetchPlayerCowboy(playerData.token);
          setPlayerCowboys(result);
        }
      } catch (err) {
        console.error("Failed to fetch resources:", err);
      }
    };

    fetchCowboys();
  }, [playerData, playerCowboys]);

  const handleCardClick = (cowboy) => {
    setSelectedCowboy(cowboy);
  };

  const handleBackToCards = () => {
    setSelectedCowboy(null);
  };
  // const cowboys = [
  //   {
  //     id: 1,
  //     name: "John Marston",
  //     image: "../../../src/assets/images/cowboys/cowboy-pix-sbg.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Arthur Morgan",
  //     image: "../../../src/assets/images/cowboys/cowboy2-pix.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Dutch Van Der Linde",
  //     image: "../../../src/assets/images/cowboys/cowboy3-pix-sbg.png",
  //   },
  //   {
  //     id: 4,
  //     name: "Nate the Nomad",
  //     image: "../../../src/assets/images/cowboys/cowboy4-pix-sbg.png",
  //   },
  //   {
  //     id: 5,
  //     name: "Buck Rivers",
  //     image: "../../../src/assets/images/cowboys/cowboy3-pix-sbg.png",
  //   },
  //   // Ajoutez autant de cowboys que nécessaire
  // ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        margin: 0,
      }}
    >
      {selectedCowboy ? (
        <CowboyDetails cowboy={selectedCowboy} onBack={handleBackToCards} />
      ) : (
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: "2rem",
            height: "100%",
            alignItems: "center",
            pl: "1rem",
          }}
        >
          {playerCowboys.map((cowboy) => (
            <Box key={cowboy.id}>
              <Box onClick={() => handleCardClick(cowboy)}>
                <CowboyCard cowboy={cowboy} />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
