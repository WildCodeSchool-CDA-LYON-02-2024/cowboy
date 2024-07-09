/* eslint-disable react/prop-types */
// Composant Cell qui représente une case dans la grille
import home from '../../../assets/map/home.png';

const Cell = ({ id, onClick, playerSlot, slotNewColony }) => {
  console.log('SLOT new COLONY :', slotNewColony);
  // Créer un tableau combiné de playerSlot et slotNewColony
  const combinedSlots = Array.isArray(playerSlot)
    ? [...playerSlot, ...slotNewColony]
    : [slotNewColony];

  // Vérifier si l'id actuel existe dans le tableau combiné
  const isPlayerSlot =
    combinedSlots.filter((slotObj) => slotObj === id).length > 0;

  return (
    <div className='cell' onClick={() => onClick(id)}>
      {id}
      {isPlayerSlot && <img src={home} alt='' className='img-home' />}
    </div>
  );
};

export default Cell;
