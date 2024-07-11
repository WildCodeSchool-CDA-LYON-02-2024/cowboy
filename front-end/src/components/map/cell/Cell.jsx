/* eslint-disable react/prop-types */
// Composant Cell qui représente une case dans la grille

import home from '../../../assets/images/navbar/home.png';

const Cell = ({ id, onClick, playerSlot }) => {
  // Vérifier si playerSlot existe et si l'id actuel existe dans playerSlot
  const isPlayerSlot = playerSlot && playerSlot.includes(id);

  return (
    <div className='cell' onClick={() => onClick(id)}>
      {isPlayerSlot && <img src={home} alt='' className='img-home' />}
    </div>
  );
};

export default Cell;
