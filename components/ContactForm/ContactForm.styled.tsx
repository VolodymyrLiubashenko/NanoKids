import styled from 'styled-components';
import {Form} from 'formik';
import {motion} from 'framer-motion';

export const StyledForm = styled(motion(Form))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 30px 20px;
  background: #474947;
  border-radius: 5px;
  z-index: 10;
  max-width: 500px;
  margin: 0 auto;
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

export const StyledFormWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.9;
  z-index: 9;
`;

export const variants = {
  visibleForm: {
    left: '50%',
    opacity: 1,
    transition: {duration: 0.5, delay: 0.3},
  },
  invisibleForm: {left: '0%', opacity: 0, transition: {duration: 0.3}},
  showModal: {y: 0, opacity: 0.85, transition: {duration: 0.3}},
  hideModal: {y: -1000, opacity: 0, transition: {duration: 0.3, delay: 0.3}},
};
