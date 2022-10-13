import {motion} from 'framer-motion';
import styled from 'styled-components';
import variables from 'styles/variables';

export const StyledMobileMenuList = styled(motion.ul)``;

interface StyledMenuListItemI {
  $isActive: boolean;
}

export const StyledMenuTitle = styled.li<StyledMenuListItemI>`
  position: relative;
  padding: 10px;
  background: ${({$isActive}) =>
    $isActive
      ? 'linear-gradient(90deg,#65d7a8 0%,#058e55 96%)'
      : 'transparrent'};
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
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
