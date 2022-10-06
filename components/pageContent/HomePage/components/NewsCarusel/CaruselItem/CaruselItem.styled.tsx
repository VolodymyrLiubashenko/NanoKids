import {motion} from 'framer-motion';
import styled from 'styled-components';

export interface StyledCaruselItemInterface {
  $bgSrc: string;
}

export const StyledCaruselItem = styled(motion.div)<StyledCaruselItemInterface>`
  flex: 1 0 45%;
  background-image: ${({$bgSrc}) =>
    `linear-gradient(0deg, #000000 0%, rgba(255,217,0,0) 100%),url(/images/news/${$bgSrc}) `};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 200px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  @media screen and (min-width: 800px) {
    flex: 1 0 10%;
    height: 450px;
    background-image: ${({$bgSrc}) =>
      `linear-gradient(0deg, #000000 0%, rgba(255,217,0,0) 33%),url(/images/news/${$bgSrc}) `};
  }
`;

export const StyledContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
  @media screen and (min-width: 850px) {
    gap: 20px;
  }
`;

export const StyledItemTitle = styled(motion.h3)`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  @media screen and (min-width: 850px) {
    font-size: 10px;
  }
`;

export const StyledNewsContent = styled(motion.p)`
  font-size: 15px;
  color: #fff;
  @media screen and (min-width: 850px) {
    font-size: 0px;
    opacity: 0;
  }
`;

export const variants = {
  onHover: {
    flex: '1 0 50%',
    transition: {duration: 0.2, ease: 'linear'},
  },
  onHoverOut: {
    flex: '1 0 10%',
    transition: {duration: 0.2, ease: 'linear'},
  },
  isMobile: {
    flex: ' 1 0 100%',
  },
};

export const contentVariants = {
  onHoverTitle: {
    fontSize: '30px',
    transition: {duration: 0.2, ease: 'linear'},
  },
  onHoverOutTitle: {
    fontSize: '10px',
    transition: {duration: 0.2, ease: 'linear'},
  },
  onHoverContent: {
    fontSize: '15px',
    transition: {duration: 0.2, ease: 'linear'},
    opacity: 1,
  },
};
