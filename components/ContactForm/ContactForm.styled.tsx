import styled from 'styled-components';
import {Form} from 'formik';
import {motion} from 'framer-motion';
import variables from 'styles/variables';

const {mainDark} = variables.colors;

export const StyledForm = styled(motion(Form))`
  position: absolute;
  left: 50%;
  translate: -50%;
  display: inline-block;
  width: 100%;
  max-width: 500px;
  margin-top: 50px;
  padding: 30px 20px;
  background: ${mainDark};
  border-radius: 5px;
  z-index: 10;
  label {
    margin-bottom: 20px;
  }
  input {
    display: block;
    width: 100%;
  }
  button {
    width: 100%;
  }
`;

export const StyledFormMessage = styled.span`
  display: block;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const variants = {
  visibleForm: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: 0.3},
  },
  invisibleForm: {x: -1000, opacity: 0, transition: {duration: 0.3}},
};
