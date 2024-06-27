import Cell from './cell/Cell.jsx';
import './Grid.css';

const Grid = ({ rows, cols }) => {
  // Gestion du clic sur une case
  const handleClick = (id) => {
    console.log(`Case cliquée avec l'ID: ${id}`);
  };

  // Génération de la grille
  const grid = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const id = `${row}-${col}`;
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
