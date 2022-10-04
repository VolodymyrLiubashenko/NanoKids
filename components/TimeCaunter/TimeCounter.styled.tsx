import styled from 'styled-components';

export const StyledTimeCounterContainer = styled.div``;

export const StiledTimeCounter = styled.div`
  display: flex;
  align-items: center;
`;

interface StyledTimeContainerProps {
  $bgColor: string;
}

export const StyledTimeContainer = styled.div<StyledTimeContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span:first-child {
    display: flex;
    align-items: center;
    font-family: 'Passion One', sans-serif;
    font-size: 50px;
    font-weight: 700;
    background: ${({$bgColor}) => $bgColor};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #000;
    span {
      margin: 0 5px;
      font-size: 40px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: #000;
    }
  }
  & > span:last-child {
    font-size: 12px;
    text-transform: uppercase;
    color: #cccccc;
    padding-right: 20px;
  }
  &:last-child {
    & > span:last-child {
      padding-right: 0px;
    }
  }
`;
