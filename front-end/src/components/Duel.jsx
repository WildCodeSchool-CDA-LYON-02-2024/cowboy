// src/components/Duel.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Duel = () => {
  const location = useLocation();
  const selectedCowboy = location.state?.selectedCowboy;
  const [enemy, setEnemy] = useState(null);
  const [cowboyLife, setCowboyLife] = useState(selectedCowboy ? selectedCowboy.stats.life : 0);
  const [enemyLife, setEnemyLife] = useState(0);
  const [barPosition, setBarPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (selectedCowboy) {
      const enemyCowboys = [
        {
          id: 4,
          name: 'Enemy Cowboy',
          image: '/src/assets/images/cowboys/cowboy4-pix-sbg.png',
          stats: { life: 400, damage: 40, resistance: 20 },
        },
      ];
      const randomEnemy = enemyCowboys[Math.floor(Math.random() * enemyCowboys.length)];
      setEnemy(randomEnemy);
      setEnemyLife(randomEnemy.stats.life);
    }
  }, [selectedCowboy]);

  const handleKeyPress = (event) => {
    if (event.key === ' ') {
      if (barPosition > 45 && barPosition < 55) {
        attack(true);
      } else {
        attack(false);
      }
      setIsAnimating(false);
    }
  };

  const attack = (isCritical) => {
    const cowboyDamage = selectedCowboy.stats.damage - (selectedCowboy.stats.damage * enemy.stats.resistance) / 100;
    const enemyDamage = enemy.stats.damage - (enemy.stats.damage * selectedCowboy.stats.resistance) / 100;

    if (isCritical) {
      setEnemyLife((prevLife) => Math.max(prevLife - cowboyDamage * 2, 0));
    } else {
      setEnemyLife((prevLife) => Math.max(prevLife - cowboyDamage, 0));
    }

    setCowboyLife((prevLife) => Math.max(prevLife - enemyDamage, 0));
  };

  const startAnimation = () => {
    setIsAnimating(true);
    const interval = setInterval(() => {
      setBarPosition((prevPosition) => {
        if (prevPosition >= 100) {
          clearInterval(interval);
          setIsAnimating(false);
          return 0;
        }
        return prevPosition + 1;
      });
    }, 50);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [barPosition, isAnimating]);

  if (!selectedCowboy || !enemy) {
    return <Typography variant="h6">No cowboy selected or enemy found!</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4">{`Duel: ${selectedCowboy.name} vs ${enemy.name}`}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <Box>
          <Typography variant="h6">{selectedCowboy.name}</Typography>
          <img src={selectedCowboy.image} alt={selectedCowboy.name} style={{ height: '100px' }} />
          <Typography>{`Life: ${cowboyLife}`}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">{enemy.name}</Typography>
          <img src={enemy.image} alt={enemy.name} style={{ height: '100px' }} />
          <Typography>{`Life: ${enemyLife}`}</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', height: '30px', backgroundColor: 'gray', marginTop: '20px', position: 'relative' }}>
        <Box
          sx={{
            width: '10px',
            height: '100%',
            backgroundColor: 'red',
            position: 'absolute',
            left: `${barPosition}%`,
          }}
        />
      </Box>
      <Button variant="contained" onClick={startAnimation} disabled={isAnimating}>
        Start
      </Button>
    </Box>
  );
};

export default Duel;
