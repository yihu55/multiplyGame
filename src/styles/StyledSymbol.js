import styled from "styled-components";
import COLORS from "./constants";

export const Symbol = styled.span`
  color: ${COLORS.darkgreen};
  background-color: ${COLORS.lightbeige};
  height: 105px;
  width: 105px;
  font-size: 25px;
  margin-top: 50px;
  @media (max-width: 480px) {
    height: 100px;
    width: 100px;
    font-size: 50px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.marinblue};
`;
