import styled from 'styled-components';
import {motion} from 'framer-motion';

interface StyledHeroImageInterface {
  $photo: string;
}

export const StyledHeroImage = styled(motion.div)<StyledHeroImageInterface>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85vh;
  background: ${({$photo}) =>
      `url(/images/news/${$photo}) center 0 / auto 100% no-repeat`},
    linear-gradient(
      90deg,
      #04b46b 0%,
      rgba(221, 255, 6, 1) 51%,
      rgba(255, 255, 255, 1) 100%
    );
`;

export const StyledNewsWrapper = styled(motion.div)`
  position: relative;
  margin-top: 65vh;
  padding: 30px 20px 70px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 0 10px #000, inset 0 0 10px #000;
  z-index: 12;
`;

export const StyledNewsContainer = styled(motion.div)`
  max-width: 700px;
`;

export const StyledNewsTitle = styled(motion.div)`
  h2 {
    font-size: 50px;
    font-weight: 700;
    line-height: 1.1;
    color: green;
  }
  & > p {
    margin-top: 30px;
    font-size: 25px;
    font-weight: 400;
    line-height: 1.1;
    color: #000;
  }
`;

export const StyledPublickDate = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  & > div {
    span {
      font-size: 15px;
      font-weight: 700;
      color: red;
      text-transform: uppercase;
    }
  }
`;

export const StyledNewsContent = styled(motion.div)`
  p {
    margin-top: 20px;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
  }
`;

export const StyledNewsFooter = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 70px;
  font-size: 30px;
  color: green;
  & > div {
    height: 2px;
    background: green;
    flex: 1 0 auto;
  }
`;

export const variants = {
  animate: {
    opacity: 1,
    transition: {delay: 0.5},
  },
  initial: {
    opacity: 0,
  },
};
