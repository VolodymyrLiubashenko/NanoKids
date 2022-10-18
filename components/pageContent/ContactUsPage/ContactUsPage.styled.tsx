import styled from 'styled-components';
import variables from 'styles/variables';
import {motion} from 'framer-motion';

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 10px 20px;
  @media screen and (min-width: 800px) {
  }
`;

export const StyledHeroBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0 0;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  color: #fff;
  @media screen and (min-width: 800px) {
    flex: 0 0 50%;
    font-size: 50px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 100px;
  }
`;
export const StyledContactsRow = styled.div`
  flex: 0 0 50%;
  padding: 20px 0 0;
`;
export const StyledContactItem = styled.div`
  margin-top: 10px;
  p {
    font-size: 15px;
    font-weight: 700;
    color: #000;
  }
  a {
    margin-top: 5px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #000;
    text-decoration: underline;
  }
  svg {
    margin: 0 20px 0 0;
  }
`;
export const StyledInfoBlock = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 800px) {
    margin-top: 80px;
  }
`;

export const StyledInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;
export const StyledInfoRowItem = styled.div`
  flex: 1 0 45%;
  @media screen and (min-width: 600px) {
    display: flex;
    gap: 40px;
  }
`;

export const StyledOfficeImage = styled.div`
  @media screen and (min-width: 600px) {
    flex: 1 0 40%;
  }
`;

export const StyledAddress = styled.div`
  margin: 20px 0 0;
  @media screen and (min-width: 600px) {
    flex: 1 0 45%;
  }
  p {
    margin-top: 10px;
    color: #000;
    font-size: 15px;
    font-weight: 700;
    @media screen and (min-width: 600px) {
      font-size: 20px;
    }
  }
`;
