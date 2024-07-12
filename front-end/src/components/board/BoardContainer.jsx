import { Accordion, Box, Container, Typography } from '@mui/material';
import { AccordionDetails, AccordionSummary } from '@mui/material/';
import { useEffect, useState } from 'react';
import ChevronIcon from '../../assets/images/ChevronIcon';
import BarilletImg from '../../assets/images/barillet-sbg.png';
import WesternCity from '../../assets/images/western-city.jpeg';
import { usePlayerContext } from '../../context/PlayerContext.jsx';
import { fetchBuildingLevel } from '../../services/BuildingService.js';
import { fetchGlobalResource } from '../../services/ResourceService.js';
import ArmurerieUp from './ArmurerieUp';
import EcurieUp from './EcurieUp';
import EntrepotUp from './EntrepotUp';
import SaloonUp from './SaloonUp';
import { funcAudioClick, funcAudioClose } from '../audioClick/audioClick.js';

export default function BoardContainer() {
  const [expanded, setExpanded] = useState(false);
  const [building, setBuilding] = useState([]);
  const [playerResources, setPlayerResources] = useState(null);
  const { playerData } = usePlayerContext();

  useEffect(() => {
    const fetchLevel = async () => {
      try {
        if (playerData && playerData.token) {
          const result = await fetchBuildingLevel(playerData.token);
          setBuilding(result);

          const resources = await fetchGlobalResource(playerData.token);
          setPlayerResources(resources);
        }
      } catch (err) {
        console.error('Failed to fetch resources:', err);
      }
    };

    fetchLevel();
  }, [playerData]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if (isExpanded) {
      funcAudioClick();
    } else funcAudioClose();
  };

  return (
    <Container
      component='section'
      disableGutters
      maxWidth={false}
      sx={{ pt: '4rem', height: '100vh', width: '100vw' }}
    >
      <Box
        sx={{
          height: '15vh',
          width: '100%',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          zIndex: 1,
        }}
      >
        <Typography
          variant='h2'
          sx={{
            pt: '1.5rem',
            display: 'flex',
            color: 'white',
            fontFamily: 'Pixelify',
            textShadow:
              '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
          }}
        >
          B
          <span>
            <Box
              component='img'
              src={BarilletImg}
              alt='barillet'
              sx={{ width: '3.5rem', height: '3.5rem', mt: '0.5rem' }}
            />
          </span>
          ARD
        </Typography>
      </Box>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          '&.MuiPaper-root': {
            margin: 0,
          },
          fontFamily: 'Pixelify',
          textShadow:
            '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
          color: 'white',
          marginTop: '10rem',
          paddingTop: '8.5rem',
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{
            height: '10vh',
            backgroundColor: '#565656',
            fontSize: '2rem',
          }}
        >
          SALOON
        </AccordionSummary>
        <AccordionDetails
          sx={{ padding: 0, backgroundColor: '#959595', height: '18.1rem' }}
        >
          {/*COMPOSANT D AMELIORATION SALOON*/}
          {building.length > 1 && playerResources && (
            <SaloonUp
              building={building[0]}
              buildingTypeId={building[0].building_type_id}
              playerResources={playerResources}
            />
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{
          '&.MuiPaper-root': {
            margin: 0,
          },
          fontFamily: 'Pixelify',
          textShadow:
            '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
          color: 'white',
          borderTop: '1px solid black',
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{
            height: '10vh',
            backgroundColor: '#565656',
            fontSize: '2rem',
          }}
        >
          ARMURERIE
        </AccordionSummary>
        <AccordionDetails
          sx={{ padding: 0, backgroundColor: '#959595', height: '18.1rem' }}
        >
          {/*COMPOSANT D AMELIORATION ARMURERIE*/}
          {building.length > 1 && playerResources && (
            <ArmurerieUp
              building={building[1]}
              buildingTypeId={building[1].building_type_id}
              playerResources={playerResources}
            />
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{
          '&.MuiPaper-root': {
            margin: 0,
          },
          fontFamily: 'Pixelify',
          textShadow:
            '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
          color: 'white',
          borderTop: '1px solid black',
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{
            height: '10vh',
            backgroundColor: '#565656',
            fontSize: '2rem',
          }}
        >
          ÉCURIE
        </AccordionSummary>
        <AccordionDetails
          sx={{ padding: 0, backgroundColor: '#959595', height: '18.1rem' }}
        >
          {/*COMPOSANT D AMELIORATION ECURIE*/}
          {building.length > 1 && playerResources && (
            <EcurieUp
              building={building[2]}
              buildingTypeId={building[2].building_type_id}
              playerResources={playerResources}
            />
          )}
        </AccordionDetails>
      </Accordion>{' '}
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        sx={{
          '&.MuiPaper-root': {
            margin: 0,
            zIndex: 1,
          },
          fontFamily: 'Pixelify',
          textShadow:
            '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
          color: 'white',
          borderTop: '1px solid black',
        }}
      >
        <AccordionSummary
          expandIcon={<ChevronIcon />}
          sx={{
            height: '10vh',
            backgroundColor: '#565656',
            fontSize: '2rem',
          }}
        >
          ENTREPOT
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
            backgroundColor: '#959595',
            height: '18.1rem',
          }}
        >
          {/*COMPOSANT D AMELIORATION ENTREPOT*/}
          {building.length > 1 && playerResources && (
            <EntrepotUp
              building={building[3]}
              buildingTypeId={building[3].building_type_id}
              playerResources={playerResources}
            />
          )}
        </AccordionDetails>
      </Accordion>
      <Box
        alt='Image de la ville'
        sx={{
          height: '18.1rem',
          width: '100%',
          backgroundImage: `url(${WesternCity})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Container>
  );
}
