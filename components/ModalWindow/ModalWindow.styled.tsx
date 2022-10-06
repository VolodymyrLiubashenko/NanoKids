import {motion} from 'framer-motion';
import styled from 'styled-components';

export const StyledModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 100vh;
  background: #fff;
  overflow: auto;
`;
export const StyledCloseButtonMobile = styled(motion.button)`
  position: fixed;
  top: 20px;
  right: 30px;
  background: #0000005e;
  border-radius: 50%;
  height: 20px;
  z-index: 55;
`;

export const StyledCloseButtton = styled(motion.button)`
  position: fixed;
  bottom: 110px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: green;
  z-index: 55;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    rotate: 45deg;
    width: 30px;
    height: 2px;
    background: #fff;
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    rotate: -45deg;
    width: 30px;
    height: 2px;
    background: #fff;
  }
`;

export const variants = {
  onHowerStart: {
    backgroundColor: '#a50e0e',
  },
  shown: {
    y: 0,
    transition: {duration: 0.5},
  },
  closed: {
    y: 1000,
    transition: {duration: 0.5},
  },
  mobileCloseButtonShow: {
    x: 0,
    transition: {duration: 1},
  },
  mobileCloseButtonHide: {
    x: 200,
    transition: {duration: 1},
  },
};
