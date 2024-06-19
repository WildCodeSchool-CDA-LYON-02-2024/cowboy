import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BottomNavbar from "./components/BottomNavbar";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNavbar />
    </>
  );
}

export default App;
