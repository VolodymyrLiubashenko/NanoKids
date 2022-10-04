import styled from 'styled-components';
import variables from 'styles/variables';

const {main, light, mainLight} = variables.colors;

export const StyledHeader = styled.header`
  background: ${main};
  &:after {
    content: '';
    display: block;
    height: 10px;
    background: linear-gradient(
      90deg,
      #06e98b 36%,
      ${mainLight} 78%,
      ${light} 100%
    );
  }
`;

export const StyledFlexHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
