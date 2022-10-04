import {motion} from 'framer-motion';
import styled from 'styled-components';

export interface StyledSocialMediaItemPropsInterface {
  $bgColor: string;
}

export const StyledSocialMediaItem = styled(
  motion.li
)<StyledSocialMediaItemPropsInterface>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 150px;
  min-height: 100px;
  padding: 10px;
  background: ${({$bgColor}) => $bgColor};
  cursor: pointer;
  h6 {
    margin-top: auto;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
  }
  p {
    color: #fff;
    font-weight: 600;
    font-size: 10px;
  }
`;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

export const variants = {
  onHower: {
    border: '2px solid #ffffff',
  },
};
