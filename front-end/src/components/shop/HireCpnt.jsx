import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../../assets/images/left-arrow-pix.png";
import ShopCardContainer from "./ShopCardContainer";

export default function HireCpnt() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleShopCardClick = () => {
    setIsButtonVisible(false);
  };

  const handleBackToCards = () => {
    setIsButtonVisible(true);
  };
  return (
    <Container
      disableGutters
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#565656",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Paper
          sx={{
            width: "90%",
            height: "40rem",
            borderRadius: "1rem",
            backgroundColor: "rgb(29,28,28,80%)",
          }}
        >
          <Box
            sx={{
              height: "5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                p: "0.5rem",
                fontSize: "2rem",
                fontFamily: "Pixelify",
                textShadow:
                  "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
                color: "white",
              }}
            >
              RECRUTEZ VOS COWBOYS
            </Typography>
          </Box>
          <Box
            sx={{
              height: "3rem",
              display: isButtonVisible ? "block" : "none",
            }}
          >
            <Link to="/shop">
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Pixelify",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  minWidth: "2rem",
                  width: "2rem",
                  height: "2rem",
                  backgroundColor: "#565656",
                  padding: 0,
                  ml: "1rem",
                }}
              >
                <Box component="img" src={LeftArrow} sx={{ width: "90%" }} />
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              height: "75%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <ShopCardContainer
              onCardClick={handleShopCardClick}
              onBackToCards={handleBackToCards}
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
