// src/components/AudioPlayer.jsx
import React, { useRef, useEffect } from 'react';
import clickSound from '../assets/musique/click.mp3';

const AudioPlayer = ({ children }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Audio played successfully');
          })
          .catch((error) => {
            console.error('Error playing audio:', error);
          });
      }
    }
  };

  const handleClick = (e) => {
    playSound();
    if (typeof children.props.onClick === 'function') {
      children.props.onClick(e);
    }
  };

  return (
    <>
      {React.cloneElement(children, { onClick: handleClick })}
      <audio ref={audioRef} src={clickSound} preload="auto" />
    </>
  );
};

export default AudioPlayer;
