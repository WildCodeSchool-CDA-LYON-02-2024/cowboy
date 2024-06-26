import { Box, Button, Container, Typography } from "@mui/material";
import Heart from "../../assets/images/cowboys/heart.png";
import Jacket from "../../assets/images/cowboys/jacket.png";
import Magnum from "../../assets/images/cowboys/magnum.png";
import fleche from "../../assets/images/fleche-verte.png";
import Gold from "../../assets/images/ressources/pepite-or.png";

export default function CowboyUpgrade() {
  return (
    <Container
      disableGutters
      sx={{
        pt: "0.3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.3rem",
        textShadow:
          "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          color: "#33E264",
        }}
      >
        <Box
          component="img"
          src={Heart}
          alt="Life"
          sx={{ height: "1rem", width: "1rem" }}
        />
        <Typography
          sx={{
            fontFamily: "Pixelify",
            fontSize: "1rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          500 {/**Stats a lier via props cmpt parent "CowboysContainer" */}
          <span>
            <Box
              component="img"
              src={fleche}
              sx={{
                height: "0.7rem",
                mt: "0.5rem",
              }}
            />
          </span>
          540 {/**Stats a lier via props cmpt parent "CowboysContainer" */}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          color: "#33E264",
        }}
      >
        <Box
          component="img"
          src={Magnum}
          alt="Damage"
          sx={{ height: "1rem", width: "1rem" }}
        />
        <Typography
          sx={{
            fontFamily: "Pixelify",
            fontSize: "1rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          500{/**Stats a lier via props cmpt parent "CowboysContainer" */}
          <span>
            <Box
              component="img"
              src={fleche}
              sx={{
                height: "0.7rem",
                mt: "0.5rem",
              }}
            />
          </span>
          540 {/**Stats a lier via props cmpt parent "CowboysContainer" */}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          color: "#33E264",
        }}
      >
        <Box
          component="img"
          src={Jacket}
          alt="Resistance"
          sx={{ height: "1rem", width: "1rem" }}
        />
        <Typography
          sx={{
            fontFamily: "Pixelify",
            fontSize: "1rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          500 {/**Stats a lier via props cmpt parent "CowboysContainer" */}
          <span>
            <Box
              component="img"
              src={fleche}
              sx={{
                height: "0.7rem",
                mt: "0.5rem",
              }}
            />
          </span>
          540 {/**Stats a lier via props cmpt parent "CowboysContainer" */}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            pl: "0.5rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          Coût:{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>

        <Box
          component="img"
          src={Gold}
          alt="Pepite d'or"
          sx={{ height: "1rem", mt: "0.2rem", ml: "0.3rem" }}
        />
        <Typography
          sx={{
            pl: "0.5rem",
            fontFamily: "Pixelify",
            textShadow:
              "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            color: "white",
            textAlign: "center",
          }}
        >
          11 k{" "}
          {/*Passer la valeur réel du cout d amelioration par le cmpnt parent "SaloonUp"  */}
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          height: "1.5rem",
          width: "70%",
          backgroundColor: "#B91818",
          "&:hover": {
            backgroundColor: "#333333",
          },
          fontFamily: "Pixelify",
          textShadow:
            "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
        }}
        // type="submit"
      >
        AMÉLIORER
      </Button>
    </Container>
  );
}
