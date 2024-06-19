import { AppBar, Toolbar, IconButton, Box } from "@mui/material";

export default function BottomNavbar() {
  return (
    <>
      {" "}
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#1D1C1C" }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer"></IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit"></IconButton>
          <IconButton color="inherit"></IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
