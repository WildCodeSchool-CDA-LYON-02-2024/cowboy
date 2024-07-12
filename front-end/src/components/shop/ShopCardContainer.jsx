import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { usePlayerContext } from "../../context/PlayerContext";
import { fetchAllCowboy } from "../../services/CowboyService";
import Recruit from "./Recruit.jsx";

import ShopCard from "./ShopCard.jsx";

export default function ShopCardContainer({ onCardClick, onBackToCards }) {
  const [available, setAvailable] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const { playerData } = usePlayerContext();

  useEffect(() => {
    const fetchCowboys = async () => {
      try {
        if (playerData && playerData.token) {
          const result = await fetchAllCowboy(playerData.token);
          setAvailable(result);
        }
      } catch (err) {
        console.error("Failed to fetch resources:", err);
      }
    };

    fetchCowboys();
  }, [playerData, available]);

  // const handleCardClickShop = (cowboy) => {
  //   setSelectedCard(cowboy);
  // };

  // const handleBackToCards = () => {
  //   setSelectedCard(null);
  // };
  const handleCardClickShop = (cowboy) => {
    setSelectedCard(cowboy);
    onCardClick();
  };

  const handleBackToCards = () => {
    setSelectedCard(null);
    onBackToCards();
  };

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
      {selectedCard && selectedCard ? (
        <Recruit cowboy={selectedCard} onBack={handleBackToCards} />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            overflowY: "auto",
            gap: "1rem",
            height: "100%",
            width: "100%",
            pl: "1rem",
          }}
        >
          {available.map((cowboy) => (
            <Box
              key={cowboy.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box onClick={() => handleCardClickShop(cowboy)}>
                <ShopCard cowboy={cowboy} />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

ShopCardContainer.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  onBackToCards: PropTypes.func.isRequired,
};
