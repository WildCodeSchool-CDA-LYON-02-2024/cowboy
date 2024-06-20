import { Container } from "@mui/material";
import CowboysContainer from "../components/cowboys/CowboysContainer";
export default function CowboyPage() {
  return (
    <Container
      disableGutters
      sx={{ height: "100vh", width: "100vw", backgroundColor: "black" }}
    >
      <CowboysContainer />
    </Container>
  );
}
