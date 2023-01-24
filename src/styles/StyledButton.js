import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.bg};
  height: 105px;
  width: 105px;
  color: ${(props) => props.color};
  font-size: 25px;
  margin-top: 50px;
  @media (max-width: 480px) {
    height: 10vh;
    width: 10vh;
  }
  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: 50%;
    `};
`;
