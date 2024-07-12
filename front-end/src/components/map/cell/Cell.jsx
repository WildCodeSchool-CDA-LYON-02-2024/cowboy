/* eslint-disable react/prop-types */
// Composant Cell qui représente une case dans la grille

import home from '../../../assets/images/navbar/home.png';

const Cell = ({ id, onClick, playerSlot, otherSlot }) => {
  // Vérifier si playerSlot existe et si l'id actuel existe dans playerSlot
  const isPlayerSlot = playerSlot && playerSlot.includes(id);

  // Vérifier si otherSlot existe et si l'id actuel existe dans otherSlot
  const isOtherSlot = otherSlot && otherSlot.includes(id);

  return (
    <div className='cell' onClick={() => onClick(id)}>
      {isPlayerSlot && <img src={home} alt='' className='img-home' />}{' '}
      {/* Slot du joueur actuel */}
      {isOtherSlot && (
        <img
          src={home}
          alt=''
          className='img-home'
          style={{
            opacity: '0.5',
            backgroundColor: 'red',
            borderRadius: '10px',
          }}
        />
      )}
      {/* Slot de l'autre joueur */}
    </div>
  );
};

export default Cell;
