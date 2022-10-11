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
  console.log('previusMatches: ', previusMatches);

  console.log('!isEmpty(previusMatches): ', !isEmpty(previusMatches));
  return (
    <StyledScheduleWrapper>
      <StyledClubLogo>FC NANOKIDS</StyledClubLogo>
      <StyledTimerWrapper>
        <p>Next Match day</p>
        <TimeCounter date={nextMatchDate} />
      </StyledTimerWrapper>
      <StyledMatchCardsContainer>
        {!isEmpty(previusMatches) && (
          <MatchDayCard matchDayOptions={previusMatches} />
        )}

        <MatchDayCard matchDayOptions={futureMatches} />
      </StyledMatchCardsContainer>
    </StyledScheduleWrapper>
  );
};

export default MatchSchedule;
