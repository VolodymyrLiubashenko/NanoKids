import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px 10px;
  border-radius: 4px;
  border: 1px solid #19920b;
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
