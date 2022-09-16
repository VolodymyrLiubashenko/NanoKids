import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: calc(100vh - 125px);
  padding-bottom: 30px;
  h1 {
    color: #ffffff;
    font-size: 25px;
    font-weight: 400;
    line-height: 1.25;
    max-width: 350px;
  }
  button {
    margin-top: 10px;
  }
`;

export const variants = {
  visible: {opacity: 1, x: 0, transition: {duration: 0.7}},
  invisible: {opacity: 0, x: -100},
  visibleButton: {opacity: 1, x: 0, transition: {duration: 0.7, delay: 0.2}},
};
