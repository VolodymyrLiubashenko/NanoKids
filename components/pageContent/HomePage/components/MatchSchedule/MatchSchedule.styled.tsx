import styled from 'styled-components';

export const StyledScheduleWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 20px auto 0;
  padding: 20px 20px 20px;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 0 10px #000;
  background-color: #fff;
  @media screen and (min-width: 800px) {
    padding: 0 20px 20px;
  }
`;

export const StyledClubLogo = styled.p`
  font-size: 40px;
  font-weight: 700;
  @media screen and (min-width: 1000px) {
    position: absolute;
    top: 10px;
    left: 20px;
  }
`;

export const StyledMatchCardsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  margin-top: 10px;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const StyledTimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  @media screen and (min-width: 800px) {
    justify-content: center;
    gap: 100px;
  }

  p {
    font-size: 25;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
  }
`;
