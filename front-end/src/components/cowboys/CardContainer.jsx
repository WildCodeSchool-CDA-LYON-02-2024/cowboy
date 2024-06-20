import { Box } from "@mui/material";
import { useState } from "react";
import CowboyCard from "./CowboyCard";
import CowboyDetails from "./CowboyDetails";

export default function CardContainer() {
  const [selectedCowboy, setSelectedCowboy] = useState(null);
  const handleCardClick = (cowboy) => {
    setSelectedCowboy(cowboy);
  };

  const handleBackToCards = () => {
    setSelectedCowboy(null);
  };
  const cowboys = [
    {
      id: 1,
      name: "John Marston",
      image: "../../../src/assets/images/cowboys/cowboy-pix.png",
    },
    {
      id: 2,
      name: "Arthur Morgan",
      image: "../../../src/assets/images/cowboys/cowboy2-pix.png",
    },
    {
      id: 3,
      name: "Dutch Van Der Linde",
      image: "../../../src/assets/images/cowboys/cowboy3-pix.png",
    },
    {
      id: 4,
      name: "Dutch Van Der Linde",
      image: "../../../src/assets/images/cowboys/cowboy2-pix.png",
    },
    {
      id: 5,
      name: "Dutch Van Der Linde",
      image: "../../../src/assets/images/cowboys/cowboy-pix.png",
    },
    // Ajoutez autant de cowboys que nécessaire
  ];
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
          {cowboys.map((cowboy) => (
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
