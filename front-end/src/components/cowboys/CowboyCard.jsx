import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import Canyon from "../../assets/images/cowboys/canyon.png";
import Magnums from "../../assets/images/navbar/double-magnum.png";
import CowboyStats from "./CowboyStats";

export default function CowboyCard({ cowboy }) {
  return (
    <Card
      sx={{
        height: "13rem",
        width: "8.3rem",
        border: "3px solid #B91818",
        backgroundColor: "#1D1C1C",
        padding: "0.15rem",
        borderRadius: "0.5rem",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={Canyon}
          sx={{ p: "0.2rem", borderRadius: "0.4rem", height: "55%" }}
        />
        <Box
          component="img"
          src={cowboy.image}
          alt={cowboy.name}
          sx={{
            height: "5.5rem",
            position: "relative",
            bottom: "6rem",
            left: "1.3rem",
          }}
        />
        <Box
          component="img"
          src={Magnums}
          alt="Bandit Class"
          sx={{
            height: "1rem",
            pl: "0.2rem",
            pr: "0.2rem",
            pb: "0.2rem",
            position: "relative",
            bottom: "12.2rem",
            backgroundColor: "#1D1C1C",
            borderRadius: "0 0 0.2rem 0",
          }}
        />
        <CardContent
          sx={{
            "&.MuiCardContent-root": { padding: 0 },
            position: "relative",
            bottom: "6.5rem",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
          }}
        >
          <Typography
            align="center"
            sx={{ fontFamily: "Pixelify", fontSize: "0.7rem" }}
          >
            {cowboy.name}
          </Typography>{" "}
          {/**Passer en props le nom via le cmpnt parent "CardContainer" */}
          <Box sx={{ height: "5rem" }}>
            <CowboyStats />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CowboyCard.propTypes = {
  cowboy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
