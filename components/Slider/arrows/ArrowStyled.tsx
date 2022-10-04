import styled from 'styled-components';
import variables from 'styles/variables';
import {motion} from 'framer-motion';

const {main, light, mainLight} = variables.colors;

export const StyledArrow = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  box-shadow: 2px 2px #000;
  border-radius: 50%;
  top: 10px;
  cursor: pointer;
`;

export const StyledNextArrow = styled(StyledArrow)`
  right: 100px;
  background-image: url('/images/assets/right.svg'),
    linear-gradient(270deg, #06e98b 36%, ${mainLight} 78%, ${light} 100%);
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledPrevArrow = styled(StyledArrow)`
  right: 150px;
  background-image: url('/images/assets/left.svg'),
    linear-gradient(90deg, #06e98b 36%, ${mainLight} 78%, ${light} 100%);
  background-repeat: no-repeat;
  background-position: center;
`;
