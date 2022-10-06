import styled from 'styled-components';
import variables from 'styles/variables';

const {mainDark, mainLight, light} = variables.colors;

export const StyledFooter = styled.footer`
  position: relative;
  padding: 30px 0;
  background: ${mainDark};
  &:before {
    position: absolute;
    top: 0;
    content: '';
    width: 100%;
    height: 10px;
    background: linear-gradient(
      270deg,
      #06e98b 36%,
      ${mainLight} 78%,
      ${light} 100%
    );
  }
`;

export const StyledFooterContainer = styled.div`
  padding: 0 10px;
  h3 {
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
  }
`;

export const StyledSocialMediaRow = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 20px;
  @media screen and (min-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;
