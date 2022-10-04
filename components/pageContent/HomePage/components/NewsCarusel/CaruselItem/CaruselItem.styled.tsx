import {motion} from 'framer-motion';
import styled from 'styled-components';

export interface StyledCaruselItemInterface {
  $bgSrc: string;
}

export const StyledCaruselItem = styled(motion.div)<StyledCaruselItemInterface>`
  background-image: ${({$bgSrc}) =>
    `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,217,0,0) 33%),url(/images/news/${$bgSrc}) `};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  flex: 1 0 10%;
  height: 450px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
`;

export const StyledItemTitle = styled(motion.h3)`
  color: #fff;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
`;
export const StyledContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  height: 100%;
  overflow: hidden;
`;

export const StyledNewsContent = styled(motion.p)`
  font-size: 0;
  opacity: 0;
  color: #fff;
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
