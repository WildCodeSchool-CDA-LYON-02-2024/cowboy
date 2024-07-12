import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import GlobeIcon from '../assets/images/navbar/GlobeIcon';
import HatIcon from '../assets/images/navbar/HatIcon';
import HomeIcon from '../assets/images/navbar/HomeIcon';
import MagnumsIcon from '../assets/images/navbar/MagnumsIcon';
import soundClick from '../assets/musique/click.mp3';
import AudioPlayer from '../services/audio/AudioPlayer.js';

export default function BottomNavbar() {
  const audio = new AudioPlayer();
  const location = useLocation();
  const activeStyle = { borderColor: '#B91818' };

  const playClick = () => {
    audio.play(soundClick);
  };

  return (
    <>
      <AppBar
        position='fixed'
        color='primary'
        sx={{
          top: 'auto',
          bottom: 0,
          backgroundColor: '#1D1C1C',
          height: '4rem',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '0.3rem',
          }}
        >
          <IconButton
            onClick={playClick}
            sx={{
              borderRadius: 0,
              height: '4.3rem',
              borderBottom: `10px solid ${
                location.pathname === '/map' ? activeStyle.borderColor : {}
              }`,
            }}
          >
            <Link to='/map'>
              <GlobeIcon />
            </Link>
          </IconButton>
          <IconButton
            onClick={playClick}
            sx={{
              borderRadius: 0,
              height: '4.3rem',
              borderBottom: `10px solid ${
                location.pathname === '/board' ? activeStyle.borderColor : {}
              }`,
            }}
          >
            <Link to='/board'>
              <HomeIcon />
            </Link>
          </IconButton>
          <IconButton
            onClick={playClick}
            sx={{
              borderRadius: 0,
              height: '4.3rem',
              borderBottom: `10px solid ${
                location.pathname === '/test' ? activeStyle.borderColor : {}
              }`,
            }}
          >
            <Link to='/test'>
              <MagnumsIcon />
            </Link>
          </IconButton>
          <IconButton
            onClick={playClick}
            sx={{
              borderRadius: 0,
              height: '4.3rem',
              borderBottom: `10px solid ${
                location.pathname === '/my-cowboys'
                  ? activeStyle.borderColor
                  : {}
              }`,
            }}
          >
            <Link to='/my-cowboys'>
              <HatIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
