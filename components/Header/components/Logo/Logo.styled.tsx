import {motion} from 'framer-motion';
import styled from 'styled-components';

import variables from 'styles/variables';

const {main, light, dark} = variables.colors;

export const Ribbon = styled(motion.div)`
  position: absolute;
  width: 15px;
  height: 0;
`;

export const StyledLogo = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  min-width: 300px;
  padding: 30px;
  background: ${main};
  border-right: 1px solid #707070;
  cursor: pointer;
  h3 {
    font-size: 30px;
    font-weight: 700;
    color: ${light};
  }
  ${Ribbon}:first-child {
    left: 0;
    bottom: 20%;
    height: 0px;
    background: ${dark};
  }
  ${Ribbon}:nth-child(2) {
    right: 0px;
    top: 10%;
    height: 0px;
    background: ${light};
  }
`;

export const variants = {
  onHoverStartRibbon: (heigth: number) => ({
    height: `${heigth}px`,
  }),
  onHowerEndRibbon: {height: 0},
  onHoverStartLogo: {
    backgroundColor: main,
  },
};
