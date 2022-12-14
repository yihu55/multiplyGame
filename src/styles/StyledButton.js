import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.bg};
  height: 105px;
  width: 105px;
  color: ${(props) => props.color};
  font-size: 25px;
  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: 50%;
    `};

  //width: 33.3%;
`;
