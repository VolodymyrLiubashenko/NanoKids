import styled from 'styled-components';

export interface StyledInputPropsInterface {
  error?: string | false | undefined;
}

export const StyledInput = styled.input<StyledInputPropsInterface>`
  padding: 10px 10px;
  border-radius: 4px;
  border: ${({error}) => (error ? '1px solid #ff0000' : '1px solid #19920b')};
  background: #ffffff;
  color: #000000;
  font-size: 15px;
  &::placeholder {
    color: #cccbcb;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  h3 {
    color: #ffffff;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 5px;
  color: red;
  font-weight: 500;
`;
