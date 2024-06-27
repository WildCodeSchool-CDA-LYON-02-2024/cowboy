import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Parcel from './Parcel.jsx';
import Colony from './Colony.jsx';
import Sidebar from './Sidebar.jsx';
import './styles/Map.css';
import './styles/Transformations.css';

const parcelImages = Array.from(
  { length: 24 },
  (_, i) => `/test${i + 1}-removebg-preview.png`
);

const Map = () => {
  console.log(' PARCEL IMG : ', parcelImages);
  const [colonies, setColonies] = useState([]);
  const [colonyStats, setColonyStats] = useState([]);
  const [resources, setResources] = useState(100);
  const mapRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-out-back', once: true });
    const interval = setInterval(() => {
      generateResources();
    }, 1000);
    return () => clearInterval(interval);
  }, [colonies]);

  useEffect(() => {
    console.log('Colonies mises à jour:', colonies);
  }, [colonies]);

  useEffect(() => {
    console.log('Statistiques des colonies mises à jour:', colonyStats);
  }, [colonyStats]);

  const generateResources = () => {
    const totalResources = colonies.reduce(
      (acc, colony) => acc + colony.level * 10,
      0
    );
    setResources((prevResources) => prevResources + totalResources);
  };

  const addColony = (id, x, y) => {
    const cost = 50;
    if (resources >= cost && !colonies.find((colony) => colony.id === id)) {
      const newColony = { id, x, y, level: 1, resources: 50 };
      console.log("Ajout d'une nouvelle colonie:", newColony);
      setColonies((prevColonies) => {
        const updatedColonies = [...prevColonies, newColony];
        console.log('Nouveau tableau de colonies:', updatedColonies);
        return updatedColonies;
      });
      setColonyStats((prevColonyStats) => {
        const newStat = { id, resources: 50, level: 1 };
        const updatedColonyStats = [...prevColonyStats, newStat];
        console.log(
          'Nouveau tableau des statistiques de colonie:',
          updatedColonyStats
        );
        return updatedColonyStats;
      });
      setResources((prevResources) => prevResources - cost);
    } else {
      alert('Pas assez de ressources pour construire une colonie !');
    }
  };

  const upgradeColony = (id) => {
    const updatedColonies = colonies.map((colony) => {
      if (colony.id === id && resources >= colony.level * 50) {
        setResources((prevResources) => prevResources - colony.level * 50);
        return {
          ...colony,
          level: colony.level + 1,
          resources: colony.resources + 50,
        };
      }
      return colony;
    });
    setColonies(updatedColonies);
    const updatedColonyStats = colonyStats.map((stat) => {
      if (stat.id === id) {
        return {
          ...stat,
          level: stat.level + 1,
          resources: stat.resources + 50,
        };
      }
      return stat;
    });
    setColonyStats(updatedColonyStats);
  };

  const removeColony = (id) => {
    const updatedColonies = colonies.filter((colony) => colony.id !== id);
    setColonies(updatedColonies);
    const updatedColonyStats = colonyStats.filter((stat) => stat.id !== id);
    setColonyStats(updatedColonyStats);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prevScale) => Math.min(Math.max(0.5, prevScale + delta), 2));
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX - translate.x;
    const startY = e.clientY - translate.y;

    const handleMouseMove = (moveEvent) => {
      setTranslate({
        x: moveEvent.clientX - startX,
        y: moveEvent.clientY - startY,
      });
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleParcelClick = (e, index) => {
    const rect = e.target.getBoundingClientRect();
    const mapRect = mapRef.current.getBoundingClientRect();
    const x = rect.left - mapRect.left + rect.width / 2;
    const y = rect.top - mapRect.top + rect.height / 2;
    console.log(`Parcelle cliquée: index=${index}, x=${x}, y=${y}`);
    addColony(index + 1, x, y);
  };

  return (
    <div className='game-container'>
      <div className='game-window'>
        <div
          className='map-container'
          ref={mapRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          style={{
            transform: `scale(${scale}) translate(${translate.x}px, ${translate.y}px)`,
          }}
        >
          <div className='map'>
            {parcelImages && parcelImages.map((src, index) => (
              <div
                key={index}
                data-aos='fade-down'
                data-aos-delay={index * 100} // Effet domino
                className={`parcel test${index + 1}-removebg-preview`}
              >
                <Parcel
                  id={index + 1}
                  src={src}
                  onClick={(e) => handleParcelClick(e, index)}
                />
              </div>
            ))}
            {colonies.map((colony) => (
              <Colony
                key={colony.id}
                id={colony.id}
                x={colony.x}
                y={colony.y}
                level={colony.level}
                resources={colony.resources}
              />
            ))}
          </div>
        </div>
      </div>
      <Sidebar
        colonies={colonyStats}
        resources={resources}
        onUpgradeColony={upgradeColony}
        onRemoveColony={removeColony}
      />
    </div>
  );
};

export default Map;
