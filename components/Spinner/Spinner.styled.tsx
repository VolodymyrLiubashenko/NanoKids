import {motion} from 'framer-motion';
import styled from 'styled-components';

export const StyledDot = styled(motion.div)`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ffffff;
`;

export const StyledDotsWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
