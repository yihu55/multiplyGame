import styled from 'styled-components';
import COLORS from './constants';

export const Square = styled.span`
  color: ${COLORS.yellow};
  background-color: ${COLORS.darkgreen};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  border: 1px solid ${COLORS.marinblue};
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;

export const Input = styled.input`
  color: Green;
  background-color: lightblue;
  height: 240px;
  width: 240px;
  border-color: lightblue;
  font-size: 200px;
  text-align: center;
  padding: 0;
  border: ${(props) => props.border};
  &:focus {
    outline: none;
  }
`;
