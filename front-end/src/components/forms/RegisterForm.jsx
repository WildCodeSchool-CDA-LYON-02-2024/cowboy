import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Box
      component="form"
      // onSubmit={handleSubmit}
      sx={{
        border: "2px black",
        height: "35rem",
        width: "20rem",
        paddingTop: "2rem",
        paddingBottom: "0.5rem",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "1rem",
          backgroundColor: "#565656B3",
          "&.MuiBox-root ": {
            fontFamily: "Pixelify",
            fontWeight: 400,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              className=" text-center text-white"
              sx={{
                pt: "1.5rem",
                fontFamily: "Pixelify",
                textShadow:
                  "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              }}
            >
              INSCRIS-TOI COWBOY
            </Typography>
            <FormControl
              sx={{
                width: "80%",
                mt: "0.5rem",
                fontFamily: "Pixelify",
                textShadow:
                  "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              }}
            >
              <InputLabel
                sx={{
                  color: "white",
                  fontFamily: "Pixelify",
                  "&.Mui-focused": {
                    color: "white",
                  },
                }}
              >
                Username
              </InputLabel>
              <OutlinedInput
                onChange={handleUsernameChange}
                value={username}
                label="Username"
                sx={{
                  height: "3rem",
                  "& input": {
                    color: "white",
                    fontFamily: "Pixelify",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                width: "80%",
                mt: "0.5rem",
                fontFamily: "Pixelify",
                textShadow:
                  "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              }}
            >
              <InputLabel
                sx={{
                  color: "white",
                  fontFamily: "Pixelify",
                  "&.Mui-focused": {
                    color: "white",
                  },
                }}
              >
                Email
              </InputLabel>
              <OutlinedInput
                onChange={handleMailChange}
                value={email}
                label="Email"
                sx={{
                  height: "3rem",
                  "& input": {
                    color: "white",
                    fontFamily: "Pixelify",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                width: "80%",
                fontFamily: "Pixelify",
                textShadow:
                  "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              }}
            >
              <InputLabel
                sx={{
                  color: "white",
                  fontFamily: "Pixelify",
                  "&.Mui-focused": {
                    color: "white",
                  },
                }}
              >
                Mot de passe
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                onChange={handlePasswordChange}
                type="password"
                value={password}
                label="Mot de passe"
                sx={{
                  height: "3rem",
                  "& input": {
                    color: "white",
                    fontFamily: "Pixelify",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
              />
            </FormControl>
          </Box>
          <Typography
            sx={{
              fontSize: "0.7rem",
              width: "60%",
              textAlign: "center",
              pt: "1rem",
              fontFamily: "Pixelify",
              color: "white",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            }}
          >
            Déjà un compte? Ta ville a besoin de toi !
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: "2rem",
              width: "60%",
              backgroundColor: "#1D1C1C",
              "&:hover": {
                backgroundColor: "#333333",
              },
              fontFamily: "Pixelify",
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
            }}
            type="submit"
          >
            S&apos;INSCRIRE
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
