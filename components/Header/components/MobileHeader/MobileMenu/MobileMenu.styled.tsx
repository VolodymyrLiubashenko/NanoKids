import {motion} from 'framer-motion';
import styled from 'styled-components';
import variables from 'styles/variables';

const {main, mainLight, mainDark} = variables.colors;

export const StyledMobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${mainDark};
  z-index: 100;
`;

export const StyledMobileMenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  background: ${mainDark};
`;

export const StyledClosedButton = styled.button`
  height: 30px;
  background: transparent;
`;

export const StyledMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 40px);
  padding-bottom: 10px;
`;

export const StyledMenuListContainer = styled.div`
  position: relative;
  flex: 0 0 50%;
`;
export const StyledSubMenuListContainer = styled.div`
  flex: 0 0 50%;
  background: linear-gradient(
    180deg,
    rgba(21, 66, 132, 1) 0%,
    rgba(4, 180, 107, 1) 100%
  );
  border-radius: 10px 0 0 10px;
`;

export const variants = {
  openSubMenu: (custom: number) => ({
    x: 0,
    transition: {duration: 0.5, delay: custom * 0.1},
  }),
  closeSubMenu: {x: 100},
  openHoleMenu: {x: 0, transition: {duration: 0.5}},
  closeHoleMenu: {x: -1000, transition: {duration: 0.5}},
};
