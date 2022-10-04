import {motion} from 'framer-motion';
import styled from 'styled-components';

export const StyledDot = styled(motion.div)`
  width: 50px;
  height: 6px;
  background: #ffffff;
  border-radius: 3px;
  cursor: pointer;
  &:before {
    display: none;
  }
`;
