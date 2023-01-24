import styled, { css, keyframes } from "styled-components";
import COLORS from "./constants";
export const ResultText = styled.div`
  color: ${COLORS.darkgreen};
  height: 180px;
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  @media (max-width: 480px) {
    font-size: 50px;
  }
`;
const animate = keyframes`
    0% {
      color: lightgreen;
      font-size: 70px;
    }

    100% {
      color: green;
      font-size: 150px;
    }
  `;
export const ResultInt = styled(ResultText)`
  ${(props) =>
    props.animation &&
    css`
      animation: ${animate} 1s ease-out;
    `}
`;
