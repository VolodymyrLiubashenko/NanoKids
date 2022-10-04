import {AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {useState} from 'react';
import {
  StyledPlayerCard,
  StyledPlayerInfoContainer,
  StyledBackgroundName,
  StyledPlayerName,
  StyledPlayerPosition,
  StyledAditionalInfo,
  variants,
  StyledPlayerCardInterface,
} from './PlayerCard.styled';

interface PlayerCardPropsInterface extends StyledPlayerCardInterface {
  name: string;
  tshirtNumber: number;
  dateOfBirth: string;
  position: string;
}

const PlayerCard: React.FC<PlayerCardPropsInterface> = ({
  $photo,
  name,
  tshirtNumber,
  dateOfBirth,
  position,
  $team,
}) => {
  const [isHowered, setIsHowered] = useState(false);
  return (
    <AnimatePresence initial={true}>
      <StyledPlayerCard
        // layoutId={`${name}`}
        // onHoverStart={() => {
        //   setIsHowered(true);
        // }}
        // onHoverEnd={() => {
        //   setIsHowered(false);
        // }}
        $photo={$photo}
        $team={$team}
      >
        <StyledPlayerInfoContainer>
          <StyledBackgroundName>{name}</StyledBackgroundName>
          <StyledPlayerName>
            <span>{tshirtNumber}</span> {name}
          </StyledPlayerName>
          <StyledPlayerPosition>{position}</StyledPlayerPosition>
          {isHowered && (
            <StyledAditionalInfo
            // variants={variants}
            // animate={'onHowerStart'}
            // initial={'onHowerEnd'}
            // exit={'onHowerEnd'}
            >
              {dateOfBirth}
            </StyledAditionalInfo>
          )}
        </StyledPlayerInfoContainer>
      </StyledPlayerCard>
    </AnimatePresence>
  );
};

export default PlayerCard;
