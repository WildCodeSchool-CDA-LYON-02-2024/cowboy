// Composant Cell qui représente une case dans la grille
const Cell = ({ id, onClick }) => {
  return (
    <div className='cell' onClick={() => onClick(id)}>
      {id}
    </div>
  );
};

export default Cell;
