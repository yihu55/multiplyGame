import styled from 'styled-components';

export const Square = styled.div`
  color: Green;
  background-color: lightBlue;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;

export const Input = styled.input`
  color: Green;
  background-color: lightblue;
  height: 290px;
  width: 23%;
  border-color: lightblue;
  font-size: 200px;
  text-align: center;
  padding: 0;
  border: ${(props) => props.border};
  float: left;
  &:focus {
    outline: none;
  }
`;
