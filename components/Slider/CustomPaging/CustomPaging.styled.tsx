import {motion} from 'framer-motion';
import styled from 'styled-components';

export const StyledDot = styled(motion.div)`
  width: 6px;
  height: 6px;
  background: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  &:before {
    display: none;
  }
`;
