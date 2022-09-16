import styled from 'styled-components';

export interface StyledButtonPropsInterface {
  main?: Boolean;
}

export const StyledButton = styled.button<StyledButtonPropsInterface>`
  padding: 15px 5px;
  border-radius: 5px;
  border: #ffffff solid 2px;
  background: ${({main}) => (main ? 'green' : 'transparent')};
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
`;

export const StyledLinkButton = styled.button`
  background: transparent;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
`;
