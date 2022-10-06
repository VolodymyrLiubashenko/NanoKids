import {motion} from 'framer-motion';
import styled from 'styled-components';

export const StyledCaruselContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  & > div:first-child {
    flex: 1 0 100%;
  }
  & > div {
    flex: 1 0 45%;
  }
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
