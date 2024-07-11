import { Container } from "@mui/material";
import ShopContainer from "../components/shop/ShopContainer";

export default function ShopPage() {
  return (
    <Container
      disableGutters
      sx={{
        height: "100vh",
        width: "100vw",
        pt: "4rem",
        backgroundColor: "black",
      }}
    >
      <ShopContainer />
    </Container>
  );
}
