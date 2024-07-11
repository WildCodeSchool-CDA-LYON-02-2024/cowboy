import { Box, Card, CardActionArea, Typography } from "@mui/material";
import Canyon from "../../assets/images/cactus.jpg";
import Bandit from "../../assets/images/cowboys/cowboy4-pix-sbg.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function PisteurCpnt({ onCardClick }) {
  return (
    <Card
      sx={{
        width: "90%",
        height: "6rem",
      }}
    >
      <Link to="/hire"></Link>
      <CardActionArea
        onClick={onCardClick}
        sx={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${Canyon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "80%",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={Bandit}
            alt="Bandit"
            sx={{ height: "4.5rem" }}
          />
          <Typography
            align="center"
            variant="h4"
            sx={{
              fontFamily: "Pixelify",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            PISTEURS
          </Typography>
        </Box>

        <Typography
          align="center"
          sx={{
            width: "100%",
            fontFamily: "Pixelify",
            fontSize: "0.8rem",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            backgroundColor: "rgb(29,28,28,80%)",
            borderRadius: "0 0 4px 4px",
          }}
        >
          Cowboys efficaces, ingénieux et prolifiques
        </Typography>
      </CardActionArea>
    </Card>
  );
}

PisteurCpnt.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};
