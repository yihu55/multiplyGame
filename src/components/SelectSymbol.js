import React, { useState } from 'react';
import { Addition } from './Addition';
import { Multiply } from './Multiply';
import { CgMathPlus, CgMathMinus, CgMathDivide } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { Substraction } from './Substraction';
import { Devision } from './Devision';
import { StyledButton } from '../styles/StyledButton';
import COLORS from '../styles/constants';

function SelectSymbol() {
  const [active, setActive] = useState('addition');

  return (
    <>
      <StyledButton
        borderRadius={true}
        style={{ float: 'right' }}
        bg={COLORS.lightbeige}
        onClick={() => {
          setActive('addition');
        }}
      >
        <CgMathPlus />
      </StyledButton>
      <StyledButton
        borderRadius={true}
        style={{ float: 'right' }}
        bg={COLORS.lightbeige}
        onClick={() => {
          setActive('substraction');
        }}
      >
        <CgMathMinus />
      </StyledButton>
      <StyledButton
        borderRadius={true}
        style={{ float: 'right' }}
        bg={COLORS.lightbeige}
        onClick={() => {
          setActive('multiply');
        }}
      >
        <AiOutlineClose />
      </StyledButton>
      <StyledButton
        borderRadius={true}
        style={{ float: 'right' }}
        bg={COLORS.lightbeige}
        onClick={() => {
          setActive('devision');
        }}
      >
        <CgMathDivide />
      </StyledButton>

      {active === 'addition' && <Addition />}
      {active === 'substraction' && <Substraction />}
      {active === 'multiply' && <Multiply />}
      {active === 'devision' && <Devision />}
    </>
  );
}

export default SelectSymbol;
