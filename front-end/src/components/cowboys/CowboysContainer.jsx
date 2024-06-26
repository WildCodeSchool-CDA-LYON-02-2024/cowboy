import { Accordion, Box, Container, Typography } from "@mui/material";
import { AccordionDetails, AccordionSummary } from "@mui/material/";
import ChevronIcon from "../../assets/images/ChevronIcon";
import BarilletImg from "../../assets/images/barillet-sbg.png";
import Bullet from "../../assets/images/cowboys/bullet.png";
import WesternSaloon from "../../assets/images/cowboys/saloon-pix.jpeg";

import CardContainer from "./CardContainer";

export default function CowboysContainer() {
  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{ pt: "4rem", height: "100%", width: "100%" }}
    >
      <Box
        sx={{
          height: "15vh",
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
        sx={{
          "&.MuiPaper-root": {
            margin: 0,
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          color: "white",
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
        sx={{
          "&.MuiPaper-root": {
            margin: 0,
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          color: "white",
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
        sx={{
          "&.MuiPaper-root": {
            margin: 0,
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          color: "white",
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
        sx={{
          "&.MuiPaper-root": {
            margin: 0,
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          color: "white",
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
        alt="Image de la ville"
        sx={{
          height: "18.1rem",
          width: "100%",
          backgroundImage: `url(${WesternSaloon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Container>
  );
}
