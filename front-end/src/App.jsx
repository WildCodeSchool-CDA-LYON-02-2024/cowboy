import { Outlet } from "react-router-dom";
import "./App.css";
import BottomNavbar from "./components/BottomNavbar";
import Header from "./components/Header";
// import GeneralRessources from "./components/ressources/GeneralRessources";
function App() {
  return (
    <>
      <Header />
      {/* <GeneralRessources /> */}
      <Outlet />
      <BottomNavbar />
    </>
  );
}

export default App;
