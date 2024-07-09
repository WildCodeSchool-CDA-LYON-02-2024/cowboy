import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Bois from "../../assets/images/ressources/buche-bois.png";
import Gold from "../../assets/images/ressources/pepite-or.png";
import Iron from "../../assets/images/ressources/steel.png";
import Stone from "../../assets/images/ressources/stone.png";
import { usePlayerContext } from "../../context/PlayerContext";
import { subscribeToResourceUpdates } from "../../services/ResourceService";

export default function GeneralRessources() {
  const [resources, setResources] = useState([]);
  const { playerData } = usePlayerContext();

  // useEffect(() => {
  //   if (!playerData.token) return;

  //   const eventSourceUrl = `${
  //     import.meta.env.VITE_BACKEND_URL
  //   }/api/resource?token=${encodeURIComponent(playerData.token)}`;

  //   //Logique SSE pour traiter les mises à jour des données
  //   const eventSource = new EventSource(eventSourceUrl);

  //   //  Logique SSE pour traiter les données
  //   eventSource.onmessage = (event) => {
  //     const newData = JSON.parse(event.data);
  //     setResources(newData);
  //   };

  //   eventSource.onerror = (err) => {
  //     console.error("EventSource error:", err);
  //     eventSource.close();
  //   };

  //   return () => {
  //     eventSource.close();
  //   };
  // }, [playerData]);

  useEffect(() => {
    if (!playerData.token) return;

    // Abonnement aux mises à jour SSE
    const eventSource = subscribeToResourceUpdates(
      playerData.token,
      (newData) => {
        setResources(newData);
      },
      (err) => {
        console.error("SSE error:", err);
      }
    );

    // Nettoyage lors du démontage du composant
    return () => {
      eventSource.close();
    };
  }, [playerData.token]);

  // Définir une correspondance du nom de la ressource à l'image
  const resourceImageMap = {
    gold: Gold,
    metal: Iron,
    stone: Stone,
    wood: Bois,
  };

  // Définir une correspondance du nom de la ressource aux styles
  const resourceStylesMap = {
    gold: { height: "1rem", mt: "0.1rem", pl: "0.2rem" },
    metal: { height: "0.75rem", mt: "0.1rem", pl: "0.3rem" },
    stone: { height: "1.2rem", mt: "0.1rem", pl: "0.1rem", width: "40%" },
    wood: { height: "1.2rem", pl: "0.5rem" },
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        zIndex: 2,
        position: "fixed",
        top: "4.2rem",
        pt: "0.3rem",
      }}
    >
      {resources.map((resource, index) => (
        <Box
          key={index}
          sx={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1rem",
            border: "2px solid #565656",
            backgroundColor: "black",
          }}
        >
          <Box
            component="img"
            src={resourceImageMap[resource.name]}
            alt={resource.name}
            sx={resourceStylesMap[resource.name]}
          />
          <Typography
            sx={{
              width: "70%",
              pl: "0.2rem",
              fontFamily: "Pixelify",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              color: "white",
              textAlign: "center",
            }}
          >
            {resource.quantity} k
          </Typography>
        </Box>
      ))}
    </Container>
  );
}
