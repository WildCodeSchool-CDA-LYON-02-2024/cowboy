import { Box } from "@mui/material";
import CowboyCard from "./CowboyCard";

export default function CardContainer() {
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
        overflow: "auto",
        whiteSpace: "nowrap",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        margin: 0,
        pl: "1rem",
      }}
    >
      {cowboys.map((cowboy) => (
        <Box key={cowboy.id}>
          <CowboyCard cowboy={cowboy} />
        </Box>
      ))}
    </Box>
  );
}
