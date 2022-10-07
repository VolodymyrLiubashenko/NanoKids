import {motion} from 'framer-motion';
import styled from 'styled-components';
import variables from 'styles/variables';

const {main, mainLight, mainDark} = variables.colors;
interface StyledMenuListItemI {
  $isActive: boolean;
}

export const StyledMenuListItem = styled.li<StyledMenuListItemI>`
  position: relative;
  width: calc(100% - 5px);
  padding: 10px;
  background: ${({$isActive}) =>
    $isActive
      ? 'linear-gradient(90deg,#65d7a8 0%,#058e55 96%)'
      : 'transparrent'};
  border-top: 1px solid #cccccc50;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: ${({$isActive}) => ($isActive ? 'inline-block' : 'none')};
    width: 4px;
    height: 100%;
    background: #ffff00;
  }
`;

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
  openHoleMenu: {x: 0, transition: {duration: 2}},
  closeHoleMenu: {x: -1000},
};
