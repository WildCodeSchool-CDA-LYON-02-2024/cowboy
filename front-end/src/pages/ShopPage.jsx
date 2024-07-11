import { Container } from "@mui/material";
import SaloonShop from "../assets/images/RealSaloon-2.jpeg";
import ShopContainer from "../components/shop/ShopContainer";

export default function ShopPage() {
  return (
    <Container
      disableGutters
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${SaloonShop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        pt: "6rem",
      }}
    >
      <ShopContainer />
    </Container>
  );
}
