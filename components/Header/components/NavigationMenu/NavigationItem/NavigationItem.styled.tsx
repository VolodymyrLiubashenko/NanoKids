import {motion} from 'framer-motion';
import styled from 'styled-components';
import variables from 'styles/variables';

const {main, light, mainDark} = variables.colors;

export const StyledNavigationItem = styled(motion.li)`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${light};
  font-size: 20px;
  font-weight: 700;
  border-right: 1px solid grey;
  background: ${main};
  cursor: pointer;
`;

export const StyledSubMenu = styled(motion.ul)`
  position: absolute;
  top: 60px;
  width: 100%;
  background: ${mainDark};
`;

export const StyledSubMenuItem = styled(motion.li)`
  display: flex;
  padding: 10px 15px 15px;
`;

export const StyledTriangle = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  translate: -50% 0;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 12px solid ${mainDark};
`;

export const variants = {
  onHover: {
    color: light,
    backgroundColor: main,
  },
  passiveItem: {
    color: '#acabab',
  },
  subMenuInitial: {
    scale: 0,
    opacity: 0,
    y: -100,
    transition: {duration: 0.1, ease: 'linear'},
  },
  subMenuAnimate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {duration: 0.1, ease: 'linear'},
  },
};
