import Cell from './cell/Cell.jsx';
import './Grid.css';
import useUser from '../../context/useUser.jsx';
import { useEffect } from 'react';
import fetchSlots from '../../services/MapService.js';

const Grid = ({ rows, cols }) => {
  //useUser();
  console.log(useUser(), 'USER IN GRID.JSX');
  // const [setSlots, slots] = useUser();

  useEffect(() => {
    fetchSlots();
  }, []);

  // Gestion du clic sur une case
  const handleClick = (id) => {
    //  console.log('slot : ', slots && slots);
    console.log(`Case cliquée avec l'ID: ${id}`);
  };

  // Génération de la grille
  const grid = [];
  let idCounter = 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const id = idCounter++;

      grid.push(<Cell key={id} id={id} onClick={handleClick} />);
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
