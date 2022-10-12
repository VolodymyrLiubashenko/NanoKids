import {AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {PlayerInterface} from 'interfaces/player';
import {useState} from 'react';
import {
  StyledPlayerCard,
  StyledPlayerInfoContainer,
  StyledBackgroundName,
  StyledPlayerName,
  StyledPlayerPosition,
} from './PlayerCard.styled';

interface PlayerCardPropsInterface {
  item: PlayerInterface;
}

const PlayerCard: React.FC<PlayerCardPropsInterface> = ({item}) => {
  return (
    <StyledPlayerCard $photo={`${item.lastName}${item.team}`} $team={item.team}>
      <StyledPlayerInfoContainer>
        <StyledBackgroundName>{item.lastName}</StyledBackgroundName>
        <StyledPlayerName>
          <span>{item.tshirtNumber}</span>
          <p>
            {item.lastName} {item.firstName}
          </p>
        </StyledPlayerName>
        <StyledPlayerPosition>{item.position}</StyledPlayerPosition>
      </StyledPlayerInfoContainer>
    </StyledPlayerCard>
  );
};

export default PlayerCard;
