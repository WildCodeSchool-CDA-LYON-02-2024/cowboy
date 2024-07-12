import AudioPlayer from '../../services/audio/AudioPlayer.js';
import audioClick from '../../assets/musique/click.mp3';
import audioClose from '../../assets/musique/close.mp3';
import audioCOllect from '../../assets/musique/collect.mp3';
import audioBuild from '../../assets/musique/build.wav';
import audioSaloonUp from '../../assets/musique/saloon.wav';
import audioArmoryUp from '../../assets/musique/ammo.wav';
import audioArmoryReloaded from '../../assets/musique/reloaded.mp3';
import audioStable from '../../assets/musique/horse.ogg';
import audioEntrepotUp from '../../assets/musique/entrepot.wav';

const clickAudio = new AudioPlayer();
const funcAudioClick = () => {
  clickAudio.play(audioClick);
};

const funcAudioClose = () => {
  clickAudio.play(audioClose);
};

const funcAudioCollect = () => {
  clickAudio.play(audioCOllect);
};

const funcAudioBuild = () => {
  clickAudio.play(audioBuild);
};

const funcAudioSaloonUp = () => {
  clickAudio.play(audioSaloonUp);
};

const funcAudioArmoryUp = () => {
  clickAudio.play(audioArmoryUp);
  setTimeout(() => {
    clickAudio.play(audioArmoryReloaded);
  }, 2500);
};

const funcAudioStableUp = () => {
  clickAudio.play(audioStable);
};

const funcAudioEntrepotUp = () => {
  clickAudio.play(audioEntrepotUp);
};
export {
  funcAudioClick,
  funcAudioClose,
  funcAudioCollect,
  funcAudioBuild,
  funcAudioSaloonUp,
  funcAudioArmoryUp,
  funcAudioStableUp,
  funcAudioEntrepotUp,
};
