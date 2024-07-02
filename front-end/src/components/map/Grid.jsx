import Cell from './cell/Cell.jsx';
import Bois from '../../assets/images/ressources/buche-bois.png';
import Gold from '../../assets/images/ressources/pepite-or.png';
import Iron from '../../assets/images/ressources/steel.png';
import Stone from '../../assets/images/ressources/stone.png';
import './Grid.css';
import { useEffect, useState } from 'react';
import fetchSlots from '../../services/MapService.js';
import { usePlayerContext } from '../../context/PlayerContext.jsx';
import { fetchResourceOnSlot } from '../../services/ResourceService.js';

const Grid = ({ rows, cols }) => {
  const { decodedToken } = usePlayerContext();
  const [playerSlot, setPlayerSlot] = useState();
  const [slots, setSlots] = useState([]);
  const [resourceSlot, setResourceSlot] = useState();
  const [slotId, setSlotId] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchSlots(setSlots);
    setPlayerSlot(decodedToken.payload.sub.slot);
  }, [slotId]);

  // Gestion du clic sur une case
  const handleClick = (id) => {
    setSlotId(slots.find((slot) => slot.id === id));
    fetchResourceOnSlot(id, setResourceSlot);
    setModal(true);
  };

  // Génération de la grille
  const grid = [];
  let idCounter = 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const slot = slots[idCounter - 1]; // Correspond à l'index dans le tableau des slots
      const id = slot ? slot.id : idCounter; // Utilise l'ID du slot ou un ID par défaut si les slots ne sont pas encore chargés
      grid.push(
        <Cell key={id} id={id} onClick={handleClick} playerSlot={playerSlot} />
      );
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
        {modal && resourceSlot && (
          <div className='modal-container'>
            <h2 className='h1-modal'>Ressources disponible</h2>
            <div className='resource-list-container'>
              <div className='resource-li'>
                <img src={Gold} alt='Lingot or' style={{ height: '1rem' }} />
                <li> {resourceSlot[0].quantity} k </li>
              </div>
              <div className='resource-li'>
                <img src={Iron} alt='Metal' style={{ height: '1rem' }} />
                <li> {resourceSlot[1].quantity} k</li>
              </div>
              <div className='resource-li'>
                <img src={Stone} alt='Pierre' style={{ height: '1rem' }} />
                <li>{resourceSlot[2].quantity} k</li>
              </div>
              <div className='resource-li'>
                <img
                  src={Bois}
                  alt='Buche de bois'
                  style={{ height: '1rem' }}
                />
                <li> {resourceSlot[3].quantity} k </li>
              </div>
            </div>
            <div className='btn-container'>
              <button className='collect-btn'>Collect</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grid;
