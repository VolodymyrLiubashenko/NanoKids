import styled from 'styled-components';
import {motion} from 'framer-motion';

export const StyledSubMenu = styled.ul`
  position: fixed;
  top: 40px;
  left: 50%;
  width: 50%;
  overflow: auto;
`;

export const StyledSubMenuTitle = styled(motion.li)`
  padding: 15px;
  background: #154284;
  border-radius: 10px 0 0 0;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;

export const StyledSubMenuListItem = styled(motion.li)`
  width: 100%;
  padding: 15px;
  border-top: 1px solid #cccccc50;
`;

export const variants = {
  openSubMenu: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {duration: 0.3, delay: custom * 0.1},
  }),
  closeSubMenu: (custom: number) => ({
    x: 200,
    opacity: 0,
    transition: {duration: 0.3, delay: custom * 0.1},
  }),
};
