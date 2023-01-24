import React from 'react';
import { useState,useEffect,useRef} from 'react';
import { Square, Input, Form} from '../styles/styles';
import { Symbol } from '../styles/StyledSymbol';
import { ResultText,ResultInt } from '../styles/StyledOutput';
import clapping from '../audioclips/clapping.mp3';
import right from '../audioclips/correct.wav';
import wrong from '../audioclips/wrong.mp3';
import Sound from './Sound';
import {Col } from 'react-bootstrap';
import randomInt from '../randomInt';


function Substraction(){

  const [inputResult,setInputResult]=useState('')
  const [number1,setNumber1]=useState('');
  const [number2,setNumber2]=useState('');
  const [correct,setCorrect]=useState(false);

  const points=useRef(0);
  
  const result=(number1-number2).toString();
 
  useEffect(() => {
    setNumber1(randomInt(1,9));
    setNumber2(randomInt(1,9));
    setCorrect(true)
    
  }, [])

  const checkResult=(e)=>{
    if(e.key==='Enter'){
      e.preventDefault();
      if(inputResult===result){
        points.current=points.current+5;
        setInputResult('');
        setCorrect(true);
        setNumber1(randomInt(1,9));
        setNumber2(randomInt(1,9));
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
    <Form onKeyDown={checkResult}>
      <Square>{number1}</Square>
      <Symbol >-</Symbol>
      <Square>{number2}</Square> 
      <Symbol>=</Symbol>
      {correct ?
      <Input type='text' border={'5px solid green'} value={inputResult} onChange={(e)=>setInputResult(e.target.value)}/>
      :
      <Input type='text' border={'5px solid red'} value={inputResult} onChange={(e)=>setInputResult(e.target.value)}/>}
    </Form>

      <ResultText>points:</ResultText>
      {correct ?<ResultInt animation> {points.current}</ResultInt>:<ResultInt> {points.current}</ResultInt> }
      
   </Col>

  </>;
}
export {Substraction};