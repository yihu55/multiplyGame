import React,{useState} from 'react'
import { StyledButton } from '../styles/StyledButton';
import { Square } from '../styles/styles';
import COLORS from '../styles/constants';

export default function Timer() {

const [time,setTime]=useState([{m:0},{s:0}]);
const [interv,setInterv]=useState();
const [toggle,setToggle]=useState(false)

const start=()=>{
  run();
  setInterv(setInterval(run,1000))
  setToggle(true)
}
let updatedS=time[1].s,updatedM=time[0].m;
const run=()=>{

   if(updatedS===60){
    updatedM++;
    updatedS=0
   }
   updatedS++
   return setTime([{m:updatedM},{s:updatedS}])
}
const stop=()=>{
    clearInterval(interv)
    setToggle(false)
}

const reset=()=>{
  clearInterval(interv);
  setTime([{m:0},{s:0}]);
  window.location.reload(); 
 
}
  return (

            <>
              {time.map((obj,index)=>{
                                const key=Object.keys(obj);
                                const value=Object.values(obj);
                            
                              return <Square height={'100px'}  width={'10%'} fontSize={'40px'} key={index}>{value}{key}</Square>
                          
                          })}
                <StyledButton bg={COLORS.darkgreen} onClick={start} disabled={toggle}>start</StyledButton>
                <StyledButton bg={COLORS.lightbeige}onClick={stop}>stop</StyledButton>
                <StyledButton bg={COLORS.yellow} onClick={reset}>reset</StyledButton>
         
           </>
  )
}
