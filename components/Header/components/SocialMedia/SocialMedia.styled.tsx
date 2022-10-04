import styled from 'styled-components';
import variables from 'styles/variables';

const {mainDark, light} = variables.colors;

export const StyledSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 0 0 30px;
  padding-left: 10px;
  background-color: ${mainDark};
  border-bottom: 1px solid grey;
  h4 {
    color: ${light};
    font-size: 10px;
    font-weight: 700;
  }
`;

export const StyledSocialMediaLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
