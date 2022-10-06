import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  flex: 1 0 auto;
  padding: 0 0 20px;
  background: #ffffff;
  border: 1px solid black;
  @media screen and (min-width: 800px) {
    max-width: 700px;
    margin: 10px auto 0;
  }
`;

export const StyledCardHeader = styled.div`
  background: #154284;
`;

export const StyledMatchDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 5px;
  & > span {
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: 900;
    color: #fff;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-size: 25px;
    font-weight: 400;
    color: #fff;
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 25px;
      font-weight: 900;
      color: #fff;
    }
  }
`;

export const StyledMatchInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  @media screen and (min-width: 1000px) {
    justify-content: space-around;
  }

  & > p:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.846673703661152) 14%,
      #154284 78%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Passion One', cursive;
    font-size: 30px;
    font-weight: 700;
    @media screen and (min-width: 800px) {
      font-size: 50px;
    }
  }
  & > div {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: calc(100% - 60px);
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      color: #ccc;
    }

    & > p {
      flex: 0 0 50%;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
    }
    & > p:first-child {
      padding-right: 30px;
      text-align: right;
    }
    & > p:last-child {
      padding-left: 30px;
      text-align: left;
    }
  }
`;

export const StyledMatchLocation = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #cccccc;
  text-align: center;
`;
