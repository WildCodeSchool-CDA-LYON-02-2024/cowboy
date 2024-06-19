import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "../src/pages/RegisterPage.jsx";
// import LoginPage from "../src/pages/LoginPage.jsx";
import { PlayerContextProvider } from "./context/PlayerContext.jsx";
import "./index.css";
import BoardPage from "./pages/BoardPage.jsx";
import TestPage from "./pages/TestPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BoardPage />,
  },
  // {
  //   path: "/",
  //   element: <LoginPage />,
  // },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
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
