import styled, { css, keyframes } from 'styled-components';
export const ResultText = styled.div`
  color: green;
  height: 300px;
  font-size: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  float: left;
`;
const animate = keyframes`
    0% {
      color: lightgreen;
      font-size: 100px;
    }

    100% {
      color: green;
      font-size: 200px;
    }
  `;
export const ResultInt = styled(ResultText)`
  ${(props) =>
    props.animation &&
    css`
      animation: ${animate} 1s ease-out;
    `}
`;
