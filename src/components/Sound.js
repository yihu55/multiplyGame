// import { Howl, Howler } from "howler";

export default function Sound(src) {
  const sound = new Audio(src);
  sound.play();
}
