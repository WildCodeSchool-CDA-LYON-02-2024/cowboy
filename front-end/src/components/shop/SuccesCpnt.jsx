import { Box, Button, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function SuccesCpnt({ cowboyName, onClose }) {
  return (
    <Box
      sx={{
        height: "15rem",
        width: "100%",
        position: "relative",
        bottom: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ height: "100%", width: "90%", backgroundColor: "#565656" }}
      >
        <Box sx={{ height: "60%", width: "100%" }}>
          <Typography
            align="center"
            variant="h4"
            sx={{
              p: "0.5rem",
              fontFamily: "Pixelify",
              color: "white",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            }}
          >
            FÉLICITATION !
          </Typography>
          <Typography
            align="center"
            sx={{
              mt: "1rem",
              fontSize: "1.3rem",
              fontFamily: "Pixelify",
              color: "white",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            }}
          >
            Tu viens de recruter
            <br /> {cowboyName}
          </Typography>
        </Box>
        <Box
          sx={{
            height: "40%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              height: "3rem",
              mt: "1rem",
              backgroundColor: "#B91818",
              width: "80%",
              fontFamily: "Pixelify",
              color: "white",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              fontSize: "1.2rem",
            }}
          >
            HEEEEHAAA !
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

SuccesCpnt.propTypes = {
  cowboyName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
