import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "../src/pages/RegisterPage.jsx";
import LoginPage from "../src/pages/LoginPage.jsx";
import App from "./App.jsx";
import { PlayerContextProvider } from "./context/PlayerContext.jsx";
import "./index.css";
import BoardPage from "./pages/BoardPage.jsx";
import FightPage from "./pages/FightPage.jsx";
import CowboyPage from "./pages/CowboyPage.jsx";
import Grid from "./components/map/Grid.jsx";

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
        path: "/map",
        element: <Grid rows={20} cols={10} c />,
      },
      {
        path: "/fight",
        element: <FightPage />,
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
