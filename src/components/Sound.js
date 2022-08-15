import { Howl, Howler } from 'howler';

export default function Sound(src) {
  const sound = new Howl({
    src: src,
  });

  sound.play();
  console.log('playsound');
  Howler.volume(0.5);
  // Howler.autoSuspend = false;
}
