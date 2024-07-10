import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Bois from "../../assets/images/ressources/buche-bois.png";
import Gold from "../../assets/images/ressources/pepite-or.png";
import Iron from "../../assets/images/ressources/steel.png";
import Stone from "../../assets/images/ressources/stone.png";
import { usePlayerContext } from "../../context/PlayerContext";
import { fetchGlobalResource } from "../../services/ResourceService";
// import { subscribeToResourceUpdates } from "../../services/ResourceService.js";

export default function GeneralRessources() {
  // const [resources, setResources] = useState([]);
  // const { playerData } = usePlayerContext();

  // useEffect(() => {
  //   if (!playerData.token) return;

  //   // // Abonnement aux mises à jour SSE
  //   // const eventSource = subscribeToResourceUpdates(
  //   //   playerData.token,
  //   //   (newData) => {
  //   //     setResources(newData);
  //   //   },
  //   //   (err) => {
  //   //     console.error("SSE error:", err);
  //   //   }
  //   // );

  //   // Nettoyage lors du démontage du composant
  //   return () => {
  //     eventSource.close();
  //   };
  // }, [playerData.token]);

  // useEffect(() => {
  //   const getResourceData = async () => {
  //     try {
  //       if (playerData && playerData.token) {
  //         const data = await fetchGlobalResource(playerData.token);
  //         setResources(data);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch resources:", err);
  //     }
  //   };

  //   getResourceData();
  // }, [playerData]);
  // console.log(resources, "RESOURCE GLOBAL CPNT");
  // // Définir une correspondance du nom de la ressource à l'image
  // const resourceImageMap = {
  //   gold: Gold,
  //   metal: Iron,
  //   stone: Stone,
  //   wood: Bois,
  // };

  // // Définir une correspondance du nom de la ressource aux styles
  // const resourceStylesMap = {
  //   gold: { height: "1rem", mt: "0.1rem", pl: "0.2rem" },
  //   metal: { height: "0.75rem", mt: "0.1rem", pl: "0.3rem" },
  //   stone: { height: "1.2rem", mt: "0.1rem", pl: "0.1rem", width: "40%" },
  //   wood: { height: "1.2rem", pl: "0.5rem" },
  // };

  // return (
  //   <Container
  //     sx={{
  //       display: "flex",
  //       justifyContent: "space-between",
  //       zIndex: 2,
  //       position: "fixed",
  //       top: "4.2rem",
  //       pt: "0.3rem",
  //     }}
  //   >
  //     {resources &&
  //       resources.map((resource, index) => (
  //         <Box
  //           key={index}
  //           sx={{
  //             width: "20%",
  //             display: "flex",
  //             justifyContent: "center",
  //             alignItems: "center",
  //             borderRadius: "1rem",
  //             border: "2px solid #565656",
  //             backgroundColor: "black",
  //           }}
  //         >
  //           <Box
  //             component="img"
  //             src={resourceImageMap[resource.name]}
  //             alt={resource.name}
  //             sx={resourceStylesMap[resource.name]}
  //           />
  //           <Typography
  //             sx={{
  //               width: "70%",
  //               pl: "0.2rem",
  //               fontFamily: "Pixelify",
  //               textShadow:
  //                 "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
  //               color: "white",
  //               textAlign: "center",
  //             }}
  //           >
  //             {resource.quantity} k
  //           </Typography>
  //         </Box>
  //       ))}
  //   </Container>
  // );
  //******************************************************************************************************** */
  const [resources, setResources] = useState({
    wood: 0,
    stone: 0,
    metal: 0,
    gold: 0,
  });

  const { playerData } = usePlayerContext();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        if (playerData && playerData.token) {
          const result = await fetchGlobalResource(playerData.token);
          setResources({
            wood: result[3].quantity,
            stone: result[2].quantity,
            metal: result[1].quantity,
            gold: result[0].quantity,
          });
        }
      } catch (err) {
        console.error("Failed to fetch resources:", err);
      }
    };
    fetchResources();
  }, [playerData]);

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
      <Box
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
          src={Bois}
          alt="Buche de bois"
          sx={{ height: "1.2rem", pl: "0.5rem" }}
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
          {resources.wood} k
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
      <Box
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
          src={Stone}
          alt="Pierre"
          sx={{ height: "1.2rem", mt: "0.1rem", pl: "0.1rem", width: "40%" }}
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
          {resources.stone} k
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
      <Box
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
          src={Iron}
          alt="Lingot de fer"
          sx={{ height: "0.75rem", mt: "0.1rem", pl: "0.3rem" }}
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
          {resources.metal} k
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
      <Box
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
          src={Gold}
          alt="Pepite d'or"
          sx={{ height: "1rem", mt: "0.1rem", pl: "0.2rem" }}
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
          {resources.gold} k
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
    </Container>
  );
}
