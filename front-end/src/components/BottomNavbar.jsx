import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import GlobeIcon from "../assets/images/navbar/GlobeIcon";
import HatIcon from "../assets/images/navbar/HatIcon";
import HomeIcon from "../assets/images/navbar/HomeIcon";
import MagnumsIcon from "../assets/images/navbar/MagnumsIcon";

export default function BottomNavbar() {
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#1D1C1C",
          height: "4rem",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "0.3rem",
          }}
        >
          <IconButton>
            <Link to="/test"> {/** Lier avec la page appropriée  */}
              <GlobeIcon />
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/board">
              <HomeIcon />
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/test"> {/** Lier avec la page appropriée  */}
              <MagnumsIcon />
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/test">{/** Lier avec la page appropriée  */}
              <HatIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
