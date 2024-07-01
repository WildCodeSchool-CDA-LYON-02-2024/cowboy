// Composant Cell qui représente une case dans la grille
import home from '../../../assets/map/home.png';
const Cell = ({ id, onClick, playerSlot }) => {
  return (
    <div className='cell' onClick={() => onClick(id)}>
      {id}
      {playerSlot === id && <img src={home} alt='' className='img-home' />}
    </div>
  );
};

export default Cell;
