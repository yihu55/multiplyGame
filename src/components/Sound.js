import { Howl, Howler } from 'howler';
export default function Sound(src) {
  const sound = new Howl({
    src,
  });

  sound.play();
  console.log('playsound');
  Howler.volume(0.5);
}
// const RenderButtonAndSound=()=>{
//     return audioclips.map((soundObj,index)=>{
//         return(
//             <button key={index} onClick={()=>SoundPlay(soundObj.sound)}>
//                 {soundObj.label}
//             </button>
//         )
//     })
// }
