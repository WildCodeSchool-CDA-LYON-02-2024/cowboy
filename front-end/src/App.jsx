// src/App.jsx
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import BottomNavbar from './components/BottomNavbar';
import Header from './components/Header';
import GeneralRessources from './components/ressources/GeneralRessources';

function App() {
  const [selectedCowboy, setSelectedCowboy] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (cowboy) => {
    setSelectedCowboy(cowboy);
    navigate('/duel');
  };

  return (
    <>
      <Header />
      <GeneralRessources />
      <Outlet context={{ selectedCowboy, handleSelect }} />
      <BottomNavbar />
    </>
  );
}

export default App;
