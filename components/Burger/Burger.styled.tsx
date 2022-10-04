import styled from 'styled-components';
import {motion} from 'framer-motion';

export interface StyledBurgerPropsInterface {
  isOpen: boolean;
}

export const StyledBurger = styled(motion.div)<StyledBurgerPropsInterface>`
  position: relative;
  width: 24px;
  height: 16px;
  cursor: pointer;
  z-index: 3;
  &:before,
  span,
  &:after {
    content: '';
    position: absolute;
    top: ${({isOpen}) => (isOpen ? '50%' : 0)};
    left: 0;
    width: 100%;
    height: 2px;
    background: red;
    transform: ${({isOpen}) =>
      isOpen ? 'translate(0%, -50%) rotate(-45deg)' : null};
    transition: 0.3s;
  }
  &:after {
    top: ${({isOpen}) => (isOpen ? '50%' : '100%')};
    transform: ${({isOpen}) =>
      isOpen ? 'translate(0%, -50%) rotate(45deg)' : 'translate(0%, -100%)'};
  }
  span {
    width: ${({isOpen}) => (isOpen ? 0 : '100%')};
    top: 50%;
    transform: translate(0%, -50%);
  }
`;
