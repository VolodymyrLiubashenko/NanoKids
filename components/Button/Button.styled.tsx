import styled from 'styled-components';

export interface StyledButtonPropsInterface {
  main?: Boolean;
  disabled?: boolean & Boolean;
}

export const StyledButton = styled.button<StyledButtonPropsInterface>`
  display: flex;
  justify-content: center;

  padding: 15px 5px;
  border-radius: 5px;
  border: #ffffff solid 2px;
  background-color: ${({main}) => (main ? '#07c01c' : 'transparent')};
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  opacity: ${({disabled}) => (disabled ? 0.3 : 1)};
`;

export const StyledLinkButton = styled.button`
  display: block;
  background: transparent;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
`;
