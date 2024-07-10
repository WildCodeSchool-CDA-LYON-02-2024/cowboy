import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import GlobeIcon from "../assets/images/navbar/GlobeIcon";
import HatIcon from "../assets/images/navbar/HatIcon";
import HomeIcon from "../assets/images/navbar/HomeIcon";
import MagnumsIcon from "../assets/images/navbar/MagnumsIcon";

export default function BottomNavbar() {
  const location = useLocation();
  const activeStyle = { borderColor: "#B91818" };

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
          <IconButton
            sx={{
              borderRadius: 0,
              height: "4.3rem",
              borderBottom: `10px solid ${
                location.pathname === "/map" ? activeStyle.borderColor : {}
              }`,
            }}
          >
            <Link to="/map">
              <GlobeIcon />
            </Link>
          </IconButton>
          <IconButton
            sx={{
              borderRadius: 0,
              height: "4.3rem",
              borderBottom: `10px solid ${
                location.pathname === "/board" ? activeStyle.borderColor : {}
              }`,
            }}
          >
            <Link to="/board">
              <HomeIcon />
            </Link>
          </IconButton>
          <IconButton
            sx={{
              borderRadius: 0,
              height: "4.3rem",
              borderBottom: `10px solid ${
                location.pathname === "/test" ? activeStyle.borderColor : {}
              }`,
            }}
          >
            <Link to="/fight">
              <MagnumsIcon />
            </Link>
          </IconButton>
          <IconButton
            sx={{
              borderRadius: 0,
              height: "4.3rem",
              borderBottom: `10px solid ${
                location.pathname === "/my-cowboys"
                  ? activeStyle.borderColor
                  : {}
              }`,
            }}
          >
            <Link to="/my-cowboys">
              <HatIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
