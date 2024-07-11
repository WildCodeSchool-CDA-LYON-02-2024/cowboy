import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage.jsx";
import RegisterPage from "../src/pages/RegisterPage.jsx";
import App from "./App.jsx";
import Grid from "./components/map/Grid.jsx";
import { PlayerContextProvider } from "./context/PlayerContext.jsx";
import "./index.css";
import BoardPage from "./pages/BoardPage.jsx";
import CowboyPage from "./pages/CowboyPage.jsx";
import HiringPage from "./pages/HiringPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/board",
        element: <BoardPage />,
      },
      {
        path: "/my-cowboys",
        element: <CowboyPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/hire",
        element: <HiringPage />,
      },
      {
        path: "/map",
        element: <Grid rows={20} cols={10} c />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <RouterProvider router={router} />
    </PlayerContextProvider>
  </React.StrictMode>
);
