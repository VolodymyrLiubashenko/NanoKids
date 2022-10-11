import MatchDayCard from './MatchDayCard/MatchDayCard';
import TimeCounter from 'components/TimeCaunter/TimeCounter';
import {
  StyledScheduleWrapper,
  StyledMatchCardsContainer,
  StyledTimerWrapper,
  StyledClubLogo,
} from './MatchSchedule.styled';
import useMatcheSchedule from './useMatchSchedule';
import {isEmpty} from 'lodash';

const MatchSchedule: React.FC = () => {
  const {futureMatches, previusMatches, nextMatchDate} = useMatcheSchedule();

  return (
    <StyledScheduleWrapper>
      <StyledClubLogo>FC NANOKIDS</StyledClubLogo>
      <StyledTimerWrapper>
        <p>Next Match day</p>
        <TimeCounter date={nextMatchDate} />
      </StyledTimerWrapper>
      <StyledMatchCardsContainer>
        {!isEmpty(previusMatches) ? (
          <MatchDayCard matchDayOptions={previusMatches} />
        ) : null}
        <MatchDayCard matchDayOptions={futureMatches} />
      </StyledMatchCardsContainer>
    </StyledScheduleWrapper>
  );
};

export default MatchSchedule;
