import React,{useState} from 'react'
import { StyledButton } from '../styles/StyledButton';
import { Square, SquareTime } from '../styles/styles';
import COLORS from '../styles/constants';
import { Col } from 'react-bootstrap';

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

    <Col style={{display:'flex',alignItems:'stretch',justifyContent:'center'}}>
              {time.map((obj,index)=>{
                                const key=Object.keys(obj);
                                const value=Object.values(obj);
                            
                return <SquareTime key={index}>{value}{key}</SquareTime>
                          
                          })}
                <StyledButton bg={COLORS.darkgreen} onClick={start} disabled={toggle}>start</StyledButton>
                <StyledButton bg={COLORS.lightbeige}onClick={stop}>stop</StyledButton>
                <StyledButton bg={COLORS.yellow} onClick={reset}>reset</StyledButton>
         
           </Col>
  )
}
