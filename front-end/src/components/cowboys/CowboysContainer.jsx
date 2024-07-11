import { Accordion, Box, Container, Typography } from "@mui/material";
import { AccordionDetails, AccordionSummary } from "@mui/material/";
import { keyframes } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronIcon from "../../assets/images/ChevronIcon";
import BarilletImg from "../../assets/images/barillet-sbg.png";
import Bullet from "../../assets/images/cowboys/bullet.png";
import WesternSaloon from "../../assets/images/cowboys/saloon-pix.jpeg";
import GreenArrow from "../../assets/images/green-arrow-pix.png";
import CardContainer from "./CardContainer";

export default function CowboysContainer() {
  const [expanded, setExpanded] = useState(false);

  const moveLeftRight = keyframes`
  0% { down: 8rem; }
  50% { top:10rem; }
  100% { down: 8rem; }
`;
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{ pt: "4rem", height: "100%", width: "100%", mb: "4rem" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "15vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            pt: "1.5rem",
            display: "flex",
            color: "white",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          }}
        >
          C{" "}
          <span>
            <Box
              component="img"
              src={BarilletImg}
              alt="barillet"
              sx={{ width: "3.5rem", height: "3.5rem", mt: "0.5rem" }}
            />
          </span>
          W
          <span>
            <Box
              component="img"
              src={Bullet}
              alt="barillet"
              sx={{ width: "3.5rem", height: "2.5rem", mt: "1rem" }}
            />
          </span>
          B{" "}
          <span>
            <Box
              component="img"
              src={BarilletImg}
              alt="barillet"
              sx={{ width: "3.5rem", height: "3.5rem", mt: "0.5rem" }}
            />
          </span>
          YS
        </Typography>
      </Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          "&.MuiPaper-root": {
            margin: 0,
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          color: "white",
          paddingTop: "8.5rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{
            height: "10vh",
            backgroundColor: "#565656",
            fontSize: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            BANDITS
            <br />
            <Typography sx={{ fontFamily: "Pixelify", fontSize: "0.8rem" }}>
              Cowboys polyvalents équilibrés et adaptables
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
            backgroundColor: "#959595",
            height: "18.1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardContainer />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          "&.MuiPaper-root": {
            margin: 0,
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          color: "white",
        }}
        disabled
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{
            height: "10vh",
            backgroundColor: "#565656",
            fontSize: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            BRUTES <br />
            <Typography sx={{ fontFamily: "Pixelify", fontSize: "0.8rem" }}>
              Cowboys robustes, endurants et tenaces
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            padding: 0,
            backgroundColor: "#959595",
            height: "18.1rem",
            display: "flex",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <CardContainer />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          "&.MuiPaper-root": {
            margin: 0,
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          color: "white",
        }}
        disabled
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{
            height: "10vh",
            backgroundColor: "#565656",
            fontSize: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            CHASSEURS DE PRIMES <br />
            <Typography sx={{ fontFamily: "Pixelify", fontSize: "0.8rem" }}>
              Cowboys précis, rusés et impitoyables.
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            padding: 0,
            backgroundColor: "#959595",
            height: "18.1rem",
            display: "flex",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <CardContainer />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          "&.MuiPaper-root": {
            margin: 0,
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          color: "white",
        }}
        disabled
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{
            height: "10vh",
            backgroundColor: "#565656",
            fontSize: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            PISTEURS <br />
            <Typography sx={{ fontFamily: "Pixelify", fontSize: "0.8rem" }}>
              Cowboys efficaces, ingénieux et prolifiques
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
            backgroundColor: "#959595",
            height: "18.1rem",
            display: "flex",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <CardContainer />
        </AccordionDetails>
      </Accordion>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            display: "flex",
            color: "white",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          }}
        >
          SAL{" "}
          <span>
            <Box
              component="img"
              src={BarilletImg}
              alt="barillet"
              sx={{ width: "3rem", height: "3rem", mt: "0.7rem" }}
            />
          </span>
          <span>
            <Box
              component="img"
              src={BarilletImg}
              alt="barillet"
              sx={{ width: "3rem", height: "3rem", mt: "0.7rem", ml: "0.3rem" }}
            />
          </span>
          N{" "}
        </Typography>
      </Box>
      <Box
        alt="Image de la ville"
        sx={{
          pb: "1rem",
          height: "18.1rem",
          width: "100%",
          backgroundImage: `url(${WesternSaloon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          component="img"
          src={GreenArrow}
          alt="Fleche"
          sx={{
            width: "1.55rem",
            height: "2.5rem",
            position: "relative",
            top: "7rem",
            left: "16rem",
            transform: "rotate(90deg)",
            animation: `${moveLeftRight} 2s infinite`,
          }}
        />
        <Link
          to="/shop"
          style={{
            display: "block",
            width: "3rem",
            height: "3rem",
            position: "relative",
            top: "8.5rem",
            left: "15rem",
          }}
        >
          <Box sx={{ height: "3rem", width: "3rem" }} />
        </Link>
      </Box>
    </Container>
  );
}
