import { Container } from "@mui/material";
import BoardContainer from "../components/board/BoardContainer";

export default function BoardPage() {
  return (
    <Container
      disableGutters
      sx={{ height: "100vh", width: "100vw", backgroundColor: "black" }}
    >
      <BoardContainer />
    </Container>
  );
}
