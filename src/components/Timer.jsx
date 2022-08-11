import React,{useState} from 'react'
import { StyledButton } from '../styles/StyledButton';
import { Square } from '../styles/styles';

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
  //  if(updatedMs===100){
  //   updatedS++;
  //   updatedMs=0;
  //  }
   if(updatedS===60){
    updatedM++;
    updatedS=0
   }

  //  if(updatedM===60){
  //   updatedH++;
  //   updatedM=0
  //  }
   //updatedMs++
   updatedS++
   return setTime([{m:updatedM},{s:updatedS}])
}
const stop=()=>{
    clearInterval(interv)
    setToggle(false)
}

const reset=()=>{
  clearInterval(interv);
  setTime([{m:0},{s:0}])
 
}
  return (
    <>
    <StyledButton bg={'lightgreen'} onClick={start} disabled={toggle}>start</StyledButton>
    <StyledButton bg={'red'}onClick={stop}>stop</StyledButton>
    <StyledButton bg={'yellow'} onClick={reset}>reset</StyledButton>
    <div>{time.map((obj,index)=>{
      const key=Object.keys(obj);
      const value=Object.values(obj);
  
      return <Square height={'100px'} width={'50%'} fontSize={'50px'} key={index}>{value}{key}</Square>
    })}</div>
 
    </>
  )
}
