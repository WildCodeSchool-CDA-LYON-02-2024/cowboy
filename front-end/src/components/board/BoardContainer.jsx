import { Accordion, Box, Container, Typography } from "@mui/material";
import { AccordionDetails, AccordionSummary } from "@mui/material/";
import ChevronIcon from "../../assets/images/ChevronIcon";
import BarilletImg from "../../assets/images/barillet-sbg.png";

export default function BoardContainer() {
  return (
    <Container component="section" disableGutters>
      <Box
        sx={{
          height: "20vh",
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
          sx={{ height: "10vh", backgroundColor: "#565656", fontSize: "2rem" }}
        >
          SALOON
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#959595", height: "15rem" }}>
          {/*COMPOSANT D AMELIORATION SALOON*/}
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
          borderTop: "1px solid black",
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{ height: "10vh", backgroundColor: "#565656", fontSize: "2rem" }}
        >
          ARMURERIE
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#959595", height: "15rem" }}>
          {/*COMPOSANT D AMELIORATION ARMURERIE*/}
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
          borderTop: "1px solid black",
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{ height: "10vh", backgroundColor: "#565656", fontSize: "2rem" }}
        >
          ÉCURIE
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#959595", height: "15rem" }}>
          {/*COMPOSANT D AMELIORATION ECURIE*/}
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion
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
          sx={{ height: "10vh", backgroundColor: "#565656", fontSize: "2rem" }}
        >
          ENTREPOT
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#959595", height: "15rem" }}>
          {/*COMPOSANT D AMELIORATION ENTREPOT*/}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
