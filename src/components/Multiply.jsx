import React from 'react';
import { useState,useEffect,useRef} from 'react';
import { Square, Input} from '../styles/styles';
import { Symbol } from '../styles/StyledSymbol';
import { ResultText,ResultInt } from '../styles/StyledOutput';
import clapping from '../audioclips/clapping.mp3';
import right from '../audioclips/correct.wav';
import wrong from '../audioclips/wrong.mp3';
import Sound from './Sound';



function Multiply(){

  const [inputResult,setInputResult]=useState('')
  const [number1,setNumber1]=useState('');
  const [number2,setNumber2]=useState('');
  const [correct,setCorrect]=useState(false);


  //const render=useRef(0);
  const points=useRef(0);
  
  const result=(number1*number2).toString();
  
  const randomInt = (min,max) => {
  
    return Math.floor(Math.random() * (max - min + 1) + min);
   
  };
 
  useEffect(() => {
    setNumber1(randomInt(1,9));
    setNumber2(randomInt(1,9));
    setCorrect(true)
  }, [])

  const checkResult=(e)=>{
    if(e.key==='Enter'){
      e.preventDefault();
      if(inputResult===result){
        Sound(right)
        points.current=points.current+5;
        setInputResult('');
        setCorrect(true);
        setNumber1(randomInt(1,9));
        setNumber2(randomInt(1,9));
      }
      else if(inputResult!==result){
        Sound(wrong)
        setCorrect(false)
        return
      }
      if(points.current===100){
        Sound(clapping)
      }
    }     
  }

  return <>
  <div>
  <form onKeyDown={checkResult}>
    <Square height={'300px'} width={'23%'} fontSize={'200px'}>{number1}</Square>
     <Symbol>x</Symbol>
     <Square height={'300px'} width={'23%'} fontSize={'200px'}>{number2}</Square> 
     <Symbol>=</Symbol>
     {correct ?
     <Input type='text' border={'5px solid green'} value={inputResult} onChange={(e)=>setInputResult(e.target.value)}/>
     :
     <Input type='text' border={'5px solid red'} value={inputResult} onChange={(e)=>setInputResult(e.target.value)}/>}
  </form>
  
  <div>
  <ResultText>points:</ResultText>
  {correct ?<ResultInt animation> {points.current}</ResultInt>:<ResultInt> {points.current}</ResultInt> }
  </div>
  </div>
{/* 
  <p>render: {render.current++}</p> */}
  </>;
}
export {Multiply};