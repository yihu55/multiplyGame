import React from 'react';
import { useState,useEffect,useRef} from 'react';
import { Square, Input} from '../styles/styles';
import { Symbol } from '../styles/StyledSymbol';
import { ResultText,ResultInt } from '../styles/StyledOutput';
import clapping from '../audioclips/clapping.mp3';
import right from '../audioclips/correct.wav';
import wrong from '../audioclips/wrong.mp3';
import Sound from './Sound';
import {Col } from 'react-bootstrap';
import randomInt from '../randomInt';


function Devision(){

  const [inputResult,setInputResult]=useState('')
  const [number1,setNumber1]=useState('');
  const [number2,setNumber2]=useState('');
  const [correct,setCorrect]=useState(false);

  const points=useRef(0);
  
  const result=(number1/number2).toString();

  let random1=randomInt(1,20)
  let random2=randomInt(1,9)
 
  useEffect(() => {

    setNumber1(random1);
    setNumber2(random2);
    setCorrect(true)
    
  }, [])
  
  do{
    random1=randomInt(1,20)
} while(random1<random2||random1%random2!==0)

  const checkResult=(e)=>{
    if(e.key==='Enter'){
      e.preventDefault();
      if(inputResult===result){
        points.current=points.current+5;
        setInputResult('');
        setCorrect(true);
        setNumber1(random1);
        setNumber2(random2);
      
        Sound(right)

      }
      else if(inputResult!==result){
        Sound(wrong);
        setInputResult('');
        setCorrect(false);
      }
      if(points.current===100){
        Sound(clapping)
      }
    }     
  }

  return <>
 


  <Col>
    <form onKeyDown={checkResult}>
      <Square height={'250px'} width={'250px'} fontSize={'200px'}>{number1}</Square>
      <Symbol >/</Symbol>
      <Square height={'250px'} width={'250px'} fontSize={'200px'}>{number2}</Square> 
      <Symbol>=</Symbol>
      {correct ?
      <Input type='text' border={'5px solid green'} value={inputResult} onChange={(e)=>setInputResult(e.target.value)}/>
      :
      <Input type='text' border={'5px solid red'} value={inputResult} onChange={(e)=>setInputResult(e.target.value)}/>}
    </form>
  </Col>
  <Col>
        
      <ResultText>points:</ResultText>
      {correct ?<ResultInt animation> {points.current}</ResultInt>:<ResultInt> {points.current}</ResultInt> }
      
   </Col>

  </>;
}
export {Devision};