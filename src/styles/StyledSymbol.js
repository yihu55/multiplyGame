import styled from 'styled-components';
import COLORS from './constants';

export const Symbol = styled.span`
  color: ${COLORS.darkgreen};
  background-color: ${COLORS.lightbeige};
  height: 250px;
  width: 250px;
  font-size: 100px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.marinblue};
`;
