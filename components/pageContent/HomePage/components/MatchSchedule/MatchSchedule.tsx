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
  const {futureMatches, previusMatches, nextMatchDate, isFetched} =
    useMatcheSchedule();
  return (
    <StyledScheduleWrapper>
      <StyledClubLogo>FC NANOKIDS</StyledClubLogo>
      <StyledTimerWrapper>
        <p>Next Match day</p>
        {nextMatchDate && <TimeCounter date={nextMatchDate} />}
      </StyledTimerWrapper>
      <StyledMatchCardsContainer>
        {isFetched && !isEmpty(previusMatches) && (
          <MatchDayCard matchDayOptions={previusMatches} />
        )}
        {!isEmpty(futureMatches) && (
          <MatchDayCard matchDayOptions={futureMatches} />
        )}
      </StyledMatchCardsContainer>
    </StyledScheduleWrapper>
  );
};

export default MatchSchedule;
