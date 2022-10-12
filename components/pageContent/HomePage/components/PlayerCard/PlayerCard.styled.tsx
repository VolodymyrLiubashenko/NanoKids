import {motion} from 'framer-motion';
import styled from 'styled-components';

export interface StyledPlayerCardInterface {
  $photo: string;
  $team: string;
}

export const StyledPlayerCard = styled(motion.div)<StyledPlayerCardInterface>`
  position: relative;
  width: 350px;
  margin: 0 auto;
  aspect-ratio: 1/1;
  background-image: ${({$photo, $team}) =>
    `linear-gradient(0deg, #000000d7 5%, rgba(255,255,255,0) 100%),url("/images/${$team}/players/${$photo}.jpg")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  @media screen and (min-width: 600px) {
    width: 290px;
  }
  @media screen and (min-width: 800px) {
    width: 390px;
  }
  @media screen and (min-width: 1000px) {
    width: initial;
  }
`;

export const StyledPlayerInfoContainer = styled(motion.div)`
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 20px;
`;

export const StyledBackgroundName = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 40%;
  right: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 100px;
  font-weight: 900;
  font-style: italic;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  opacity: 0.15;
`;

export const StyledPlayerName = styled(motion.div)`
  font-size: 50px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  span {
    display: inline-block;
    background: linear-gradient(
      45deg,
      rgba(19, 173, 28, 0.846673703661152) 39%,
      rgba(255, 255, 255, 0.846673703661152) 50%,
      rgba(41, 255, 7, 1) 63%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    color: #ffffff;
  }
`;

export const StyledPlayerPosition = styled(motion.div)`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
`;

export const StyledAditionalInfo = styled(motion.div)`
  padding: 20px;
  border-top: 1px solid #cccccc;
  color: #ffffff;
  text-align: center;
`;

export const variants = {
  onHowerStart: {
    opacity: 1,
    y: 0,
    transition: {ease: 'linear'},
  },
  onHowerEnd: {opacity: 0, y: 100},
};
