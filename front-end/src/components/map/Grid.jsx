import Cell from './cell/Cell.jsx';
import './Grid.css';
import { useEffect, useState } from 'react';
// import fetchSlots from '../../services/MapService.js';

const Grid = ({ rows, cols }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    // fetchSlots(setSlots);
  }, []);

  const handleClick = (id) => {
    console.log(
      'slot :',
      slots.find((slot) => slot.id === id)
    );
    console.log(`Case cliquée avec l'ID: ${id}`);
  };

  const grid = [];
  let idCounter = 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const slot = slots[idCounter - 1];
      const id = slot ? slot.id : idCounter;
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
