import { Accordion, Box, Container, Typography } from "@mui/material";
import { AccordionDetails, AccordionSummary } from "@mui/material/";
import { useState } from "react";
import ChevronIcon from "../../assets/images/ChevronIcon";
import BarilletImg from "../../assets/images/barillet-sbg.png";
import WesternCity from "../../assets/images/western-city.jpeg";
import ArmurerieUp from "./ArmurerieUp";
import EcurieUp from "./EcurieUp";
import EntrepotUp from "./EntrepotUp";
import SaloonUp from "./SaloonUp";

export default function BoardContainer() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      component="section"
      disableGutters
      maxWidth={false}
      sx={{ pt: "4rem", height: "100vh", width: "100vw" }}
    >
      <Box
        sx={{
          height: "15vh",
          width: "100%",
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
          B
          <span>
            <Box
              component="img"
              src={BarilletImg}
              alt="barillet"
              sx={{ width: "3.5rem", height: "3.5rem", mt: "0.5rem" }}
            />
          </span>
          ARD
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
          marginTop: "10rem",
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
          SALOON
        </AccordionSummary>
        <AccordionDetails
          sx={{ padding: 0, backgroundColor: "#959595", height: "18.1rem" }}
        >
          {/*COMPOSANT D AMELIORATION SALOON*/}
          <SaloonUp />
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
          borderTop: "1px solid black",
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
          ARMURERIE
        </AccordionSummary>
        <AccordionDetails
          sx={{ padding: 0, backgroundColor: "#959595", height: "18.1rem" }}
        >
          {/*COMPOSANT D AMELIORATION ARMURERIE*/}
          <ArmurerieUp />
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
          borderTop: "1px solid black",
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
          ÉCURIE
        </AccordionSummary>
        <AccordionDetails
          sx={{ padding: 0, backgroundColor: "#959595", height: "18.1rem" }}
        >
          {/*COMPOSANT D AMELIORATION ECURIE*/}
          <EcurieUp />
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          "&.MuiPaper-root": {
            margin: 0,
            zIndex: 1,
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
          color: "white",
          borderTop: "1px solid black",
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
          ENTREPOT
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
            backgroundColor: "#959595",
            height: "18.1rem",
          }}
        >
          {/*COMPOSANT D AMELIORATION ENTREPOT*/}
          <EntrepotUp />
        </AccordionDetails>
      </Accordion>
      <Box
        alt="Image de la ville"
        sx={{
          height: "18.1rem",
          width: "100%",
          backgroundImage: `url(${WesternCity})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Container>
  );
}
