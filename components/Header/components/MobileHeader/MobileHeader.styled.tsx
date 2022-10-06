import styled from 'styled-components';
import variables from 'styles/variables';

const {main} = variables.colors;

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 10px;
  background: ${main};
  z-index: 40;
`;

export const StyledLogo = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
`;
