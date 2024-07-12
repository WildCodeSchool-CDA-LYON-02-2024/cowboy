import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePlayerContext } from '../../context/PlayerContext';
import { loginService } from '../../services/PlayerService';
import AudioPlayer from '../../services/audio/AudioPlayer.js';
import audioTheme from '../../assets/musique/theme.mp3';

export default function LoginForm() {
  const audio = new AudioPlayer();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = usePlayerContext();

  const navigate = useNavigate();

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePlay = () => {
    audio.play(audioTheme, true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { success, user, role, error } = await loginService(email, password);

    if (success) {
      // Inclure le rôle avec userData lors de la connexion
      login({ ...user, role });
      console.info('Connecté');
      navigate('/map');
      console.info('Connexion réussi');
    } else {
      setError(error);
      console.info('Echec de la connexion big enflure');
    }
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        border: '2px black',
        height: '33rem',
        width: '20rem',
        paddingTop: '3rem',
      }}
    >
      <Paper
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '1rem',
          backgroundColor: '#565656B3',
          '&.MuiBox-root ': {
            fontFamily: 'Pixelify',
            fontWeight: 400,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pt: '2rem',
              gap: '2rem',
              width: '100%',
            }}
          >
            <Typography
              variant='h4'
              className=' text-center text-white'
              sx={{
                pt: '1rem',
                fontFamily: 'Pixelify',
                textShadow:
                  '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
              }}
            >
              BON RETOUR COWBOY
            </Typography>
            <FormControl
              sx={{
                width: '80%',
                mt: '0.5rem',
                fontFamily: 'Pixelify',
                textShadow:
                  '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
              }}
            >
              <InputLabel
                sx={{
                  color: 'white',
                  fontFamily: 'Pixelify',
                  '&.Mui-focused': {
                    color: 'white',
                  },
                }}
              >
                Email
              </InputLabel>
              <OutlinedInput
                required
                onChange={handleMailChange}
                type='email'
                value={email}
                label='Email'
                sx={{
                  height: '3rem',
                  '& input': {
                    color: 'white',
                    fontFamily: 'Pixelify',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                width: '80%',
                fontFamily: 'Pixelify',
                textShadow:
                  '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
              }}
            >
              <InputLabel
                sx={{
                  color: 'white',
                  fontFamily: 'Pixelify',
                  '&.Mui-focused': {
                    color: 'white',
                  },
                }}
              >
                Mot de passe
              </InputLabel>
              <OutlinedInput
                required
                onChange={handlePasswordChange}
                value={password}
                type='password'
                label='Mot de passe'
                sx={{
                  height: '3rem',
                  '& input': {
                    color: 'white',
                    fontFamily: 'Pixelify',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                }}
              />
            </FormControl>
          </Box>
          <Link to={'/register'}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                pt: '1rem',
                fontFamily: 'Pixelify',
                color: 'white',
                textShadow:
                  '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
              }}
            >
              Pas encore de compte? Inscrivez vous !
            </Typography>
          </Link>
          {error && (
            <Typography
              sx={{
                marginTop: '2rem',
                fontSize: '0.7rem',
                textAlign: 'center',
                fontFamily: 'Pixelify',
                textShadow:
                  '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
              }}
              color='error'
            >
              {error}
            </Typography>
          )}

          <Button
            onClick={handlePlay}
            variant='contained'
            sx={{
              mt: '2rem',
              width: '60%',
              backgroundColor: '#1D1C1C',
              '&:hover': {
                backgroundColor: '#333333',
              },
              fontFamily: 'Pixelify',
              textShadow:
                '1px 1px 0px black, -1px 1px 0px black, 1px -1px 0px black, -1px -1px 0px black',
            }}
            type='submit'
          >
            Se connecter
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
