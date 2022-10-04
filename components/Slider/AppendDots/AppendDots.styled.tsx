import styled from 'styled-components';

export const StyledAppendDots = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  li {
    width: initial;
    height: initial;
    &.slick-active {
      div {
        background: #3029a9;
      }
    }
  }
`;
