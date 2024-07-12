class AudioPlayer {
  constructor() {
    this.audio = new Audio();
  }

  play(src, loop = false) {
    this.audio.src = src;
    this.audio.loop = loop
    this.audio.play();
  }
}

export default AudioPlayer;
