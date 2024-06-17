import { Box, Container, keyframes } from "@mui/material";
import logo from "../assets/images/LOGO.png";
import backgroundImage from "../assets/images/cactus.jpg";
import RegisterForm from "../components/forms/RegisterForm";

export default function RegisterPage() {
  const scrollBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -100vw 0; }
`;

  return (
    <Container
      maxWidth="false"
      sx={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${backgroundImage}),url(${backgroundImage})`,
        backgroundSize: "auto 100%",
        backgroundRepeat: "repeat-x",
        animation: `${scrollBackground} 30s linear infinite`,
        "@media (min-width: 600px)": {
          animation: `${scrollBackground} 45s linear infinite`,
          backgroundSize: "100vw 100vh",
        },
        "@media (min-width: 1200px)": {
          animation: `${scrollBackground} 30s linear infinite`,
          backgroundSize: "100vw 100vh",
        },
      }}
    >
      <Box
        component="img"
        src={logo}
        sx={{ height: "10rem", width: "12rem", mt: "1rem" }}
      />
      <RegisterForm />
    </Container>
  );
}
