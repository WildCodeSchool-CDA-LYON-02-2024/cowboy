// src/components/CowboySelection.jsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CowboyCard from './cowboys/CowboyCard';
import { useNavigate } from 'react-router-dom';

const CowboySelection = ({ cowboys }) => {
  const navigate = useNavigate();

  const handleSelect = (cowboy) => {
    navigate('/duel', { state: { selectedCowboy: cowboy } });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ fontFamily: 'Pixelify', marginBottom: '2rem' }}>
        Choisissez votre cowboy
      </Typography>
      <Box sx={{ display: 'flex', gap: '2rem' }}>
        {cowboys.map((cowboy) => (
          <Button key={cowboy.id} onClick={() => handleSelect(cowboy)}>
            <CowboyCard cowboy={cowboy} />
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default CowboySelection;
