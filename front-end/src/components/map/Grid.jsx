import Cell from './cell/Cell.jsx';
import './Grid.css';
import { useEffect, useState } from 'react';
import fetchSlots from '../../services/MapService.js';

const Grid = ({ rows, cols }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchSlots(setSlots);
  }, []);

  // Gestion du clic sur une case
  const handleClick = (id) => {
    console.log(
      'slot :',
      slots.find((slot) => slot.id === id)
    );
    console.log(`Case cliquée avec l'ID: ${id}`);
  };

  // Génération de la grille
  const grid = [];
  let idCounter = 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const slot = slots[idCounter - 1]; // Correspond à l'index dans le tableau des slots
      const id = slot ? slot.id : idCounter; // Utilise l'ID du slot ou un ID par défaut si les slots ne sont pas encore chargés
      grid.push(<Cell key={id} id={id} onClick={handleClick} />);
      idCounter++;
    }
  }

  return (
    <div className='scroll-container background'>
      <div
        className='grid'
        style={{
          gridTemplateColumns: `repeat(${cols}, 50px)`,
        }}
      >
        {grid}
      </div>
    </div>
  );
};

export default Grid;
