import {motion} from 'framer-motion';
import styled from 'styled-components';

export const StyledNavigation = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 100%;
  height: 100vh;
  width: 70%;
  padding: 70px 50px 25px 25px;
  background: #000000;
  flex: 0 0 70%;
  opacity: 0.85;
  z-index: 2;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const menuVariants = {
  open: {
    left: '30%',
    transition: {ease: 'linear'},
  },
  close: {
    left: '100%',
  },
};

export const listItemsVarints = {
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {duration: 0.3, delay: i * 0.05},
  }),
  close: {
    opacity: 0,
    x: 100,
  },
};
