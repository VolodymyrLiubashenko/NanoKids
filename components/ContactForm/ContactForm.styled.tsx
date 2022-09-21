import styled from 'styled-components';
import {Form} from 'formik';
import {motion} from 'framer-motion';

export const StyledForm = styled(motion(Form))`
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  width: 100%;
  max-width: 500px;
  padding: 30px 20px;
  background: #474947;
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
  color: #1afb06;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const StyledFormWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  text-align: center;
  background: #000000;
  opacity: 0.9;
  overflow: auto;
  z-index: 9;
  &::before {
    height: 100%;
    min-height: 100%;
    display: inline-block;
    vertical-align: middle;
    content: '';
  }
`;

export const variants = {
  visibleForm: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: 0.3},
  },
  invisibleForm: {x: -500, opacity: 0, transition: {duration: 0.3}},
  showModal: {y: 0, opacity: 0.85, transition: {duration: 0.3}},
  hideModal: {y: -1000, opacity: 0, transition: {duration: 0.3, delay: 0.3}},
};
