import styled from "styled-components";
import COLORS from "./constants";
export const SquareTime = styled.span`
  color: ${COLORS.yellow};
  display: inline-block;
  text-align: center;
  height: 105px;
  width: 105px;
  font-size: 25px;
  margin-top: 50px;
  @media (max-width: 480px) {
    width: 10vh;
    height: 10vh;
    font-size: 50px;
    font-size: 25px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Square = styled.span`
  color: ${COLORS.yellow};
  background-color: ${COLORS.darkgreen};
  height: 105px;
  width: 105px;
  font-size: 25px;
  margin-top: 50px;
  @media (max-width: 480px) {
    height: 100px;
    width: 100px;
    font-size: 50px;
  }
  border: 1px solid ${COLORS.marinblue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  color: Green;
  background-color: lightblue;
  height: 105px;
  width: 105px;
  font-size: 25px;
  margin-top: 50px;
  @media (max-width: 480px) {
    height: 100px;
    width: 100px;
    font-size: 50px;
  }
  border-color: lightblue;
  text-align: center;
  padding: 0;
  border: ${(props) => props.border};
  &:focus {
    outline: none;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: row;
`;
