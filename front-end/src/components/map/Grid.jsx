import { Button } from '@mui/material';
import Cell from './cell/Cell.jsx';
import Bois from '../../assets/images/ressources/buche-bois.png';
import Gold from '../../assets/images/ressources/pepite-or.png';
import Iron from '../../assets/images/ressources/steel.png';
import Stone from '../../assets/images/ressources/stone.png';
import resourcesForColony from '../../../../back-end/services/ressources/resourcesForColony.js';
import './Grid.css';
import { useEffect, useState } from 'react';
import fetchSlots from '../../services/MapService.js';
import { usePlayerContext } from '../../context/PlayerContext.jsx';
import {
  fetchResourceOnSlot,
  collectResource,
  fetchGlobalResource,
  buildRessource,
} from '../../services/ResourceService.js';

const Grid = ({ rows, cols }) => {
  const { decodedToken, playerData } = usePlayerContext();
  const [playerSlot, setPlayerSlot] = useState();
  const [slots, setSlots] = useState([]);
  const [resourceSlot, setResourceSlot] = useState([]);
  const [slotId, setSlotId] = useState();
  const [slotNewColony, setSlotNewColony] = useState([]);
  const [message, setMessage] = useState('');

  const [modal, setModal] = useState(false);
  const [playerId, setPlayerId] = useState();
  const [colonyId, setColonyId] = useState();

  useEffect(() => {
    fetchGlobalResource(playerData.token);

    fetchSlots(setSlots);
    setPlayerSlot(decodedToken.payload.sub.slot);
    setPlayerId(decodedToken.payload.sub.id);
    setColonyId(decodedToken.payload.sub.colonyId);
  }, [slotId, slotNewColony]);

  // Gestion du clic sur une case
  const handleClick = (id) => {
    setSlotId(slots.find((slot) => slot.id === id));
    fetchResourceOnSlot(id, setResourceSlot);
    setModal(true);
    console.log('resource solot : ', resourceSlot);
  };

  const handleCollect = () => {
    collectResource(playerId, resourceSlot, colonyId);
    setModal(false);
  };

  const handleBuild = () => {
    buildRessource(playerId, colonyId, slotId, setSlotNewColony, setMessage);
    if (!message === "Tu n'as pas assez d'argent") {
      setModal(false);
    }
  };

  const handleClose = () => {
    setModal(false);
    setMessage('');
  };

  // Génération de la grille
  const grid = [];
  let idCounter = 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const slot = slots[idCounter - 1]; // Correspond à l'index dans le tableau des slots
      const id = slot ? slot.id : idCounter; // Utilise l'ID du slot ou un ID par défaut si les slots ne sont pas encore chargés
      grid.push(
        <Cell
          key={id}
          id={id}
          onClick={handleClick}
          playerSlot={playerSlot}
          slotNewColony={slotNewColony}
        />
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
        {modal && resourceSlot && resourceSlot.length > 0 && (
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
              <Button
                onClick={handleCollect}
                variant='contained'
                sx={{
                  width: '60%',
                  backgroundColor: '#1D1C1C',
                  '&:hover': {
                    backgroundColor: '#333333',
                  },
                  fontFamily: 'Pixelify',
                  textShadow:
                    '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
                }}
              >
                Collecter
              </Button>
            </div>
            <div className='colony-container'>
              <h2 className='h2-colony'>Colonie</h2>
            </div>
            <div className='needed-ressources-container'>
              <h2 className='h2-needed-ressources'>Ressource necessaire </h2>
              <div className='resource-list-container'>
                {/*TODO :  Changer le nommbre de ressources avec les ressources necessaire  */}
                <div className='resource-li'>
                  <img src={Gold} alt='Lingot or' style={{ height: '1rem' }} />
                  <li> {resourcesForColony[0].quantity} k </li>
                </div>
                <div className='resource-li'>
                  <img src={Iron} alt='Metal' style={{ height: '1rem' }} />
                  <li> {resourcesForColony[1].quantity} k</li>
                </div>
                <div className='resource-li'>
                  <img src={Stone} alt='Pierre' style={{ height: '1rem' }} />
                  <li>{resourcesForColony[2].quantity} k</li>
                </div>
                <div className='resource-li'>
                  <img
                    src={Bois}
                    alt='Buche de bois'
                    style={{ height: '1rem' }}
                  />
                  <li> {resourcesForColony[3].quantity} k </li>
                </div>
              </div>
            </div>
            <div className='btn-container'>
              <Button
                onClick={handleBuild}
                variant='contained'
                sx={{
                  width: '60%',
                  backgroundColor: '#1D1C1C',
                  '&:hover': {
                    backgroundColor: '#333333',
                  },
                  fontFamily: 'Pixelify',
                  textShadow:
                    '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
                }}
              >
                Construire
              </Button>
              {message && <h6>{message}</h6>}
            </div>
            <div className='btn-container'>
              <Button
                onClick={handleClose}
                variant='contained'
                sx={{
                  width: '50%',
                  height: '15px',
                  backgroundColor: '#1D1C1C',
                  '&:hover': {
                    backgroundColor: '#333333',
                  },
                  fontFamily: 'Pixelify',
                  textShadow:
                    '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
                }}
              >
                Fermer
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grid;
