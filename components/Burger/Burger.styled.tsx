import styled from 'styled-components';
import {motion} from 'framer-motion';

export const StyledBurger = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(0%, -50%);
  width: 24px;
  height: 16px;
  cursor: pointer;
  z-index: 3;
  &:before,
  span,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffffff;
  }
  &:after {
    top: 100%;
  }
  span {
    width: 100%;
    top: 50%;
    translate: 0%, -50%;
  }
`;
