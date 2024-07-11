// src/components/forms/LoginForm.jsx
import React, { useState, useRef, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, OutlinedInput, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import themeMusic from "../../assets/musique/theme.mp3";
import AudioPlayer from "../AudioPlayer";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const audioRef = useRef(new Audio(themeMusic));

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting login form with:", { username, password });

    if (username === "testuser" && password === "testpassword") {
      console.log("Login successful");
      try {
        await audioRef.current.play();
        navigate("/map");
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    } else {
      setError("Invalid username or password");
      console.log("Login failed: Invalid username or password");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: "2px black",
        height: "40rem",
        width: "20rem",
        paddingTop: "2rem",
        paddingBottom: "3.5rem",
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
              className="text-center text-white"
              sx={{
                pt: "1.5rem",
                fontFamily: "Pixelify",
                textShadow:
                  "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              }}
            >
              BON RETOUR COWBOY
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
                required
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
                required
                onChange={handlePasswordChange}
                value={password}
                type="password"
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
          {error && (
            <Typography
              sx={{
                fontSize: "0.7rem",
                textAlign: "center",
                fontFamily: "Pixelify",
                textShadow:
                  "1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black",
              }}
              color="error"
            >
              {error}
            </Typography>
          )}
          <AudioPlayer>
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
              Se connecter
            </Button>
          </AudioPlayer>
        </Box>
      </Paper>
    </Box>
  );
}
