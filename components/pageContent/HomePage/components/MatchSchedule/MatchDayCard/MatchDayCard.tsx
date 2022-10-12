import {MatchInterface} from 'interfaces/match';
import Image from 'next/image';
import teams from 'db/teams';
import React from 'react';
import {
  StyledCardContainer,
  StyledMatchDate,
  StyledCardHeader,
  StyledMatchInfo,
  StyledMatchLocation,
} from './MatchDayCard.styled';
import useMatchDayCard from './useMatchDayCard';

interface MatchDayCardPropsInterface {
  matchDayOptions: MatchInterface[];
}

const MatchDayCard: React.FC<MatchDayCardPropsInterface> = ({
  matchDayOptions,
}) => {
  const {month, weekDay, day, state} = useMatchDayCard(matchDayOptions);
  const firstTeamlogo = (el: MatchInterface) => {
    const logo = teams.find((elem) => {
      return elem.name === el.firstTeam.name;
    });
    return logo?.logo;
  };
  const secondTeamlogo = (el: MatchInterface) => {
    const logo = teams.find((elem) => {
      return elem.name === el.secondTeam.name;
    });
    return logo?.logo;
  };

  return (
    <StyledCardContainer>
      <StyledCardHeader>
        <StyledMatchDate>
          <span>{day}</span>
          <p>
            <span>{weekDay}</span>
            <br />
            {month}
          </p>
        </StyledMatchDate>
      </StyledCardHeader>
      {state.map((el, i) => (
        <React.Fragment key={el.firstTeam.name + i}>
          <StyledMatchInfo>
            <p>
              <Image
                layout={'responsive'}
                src={`/images/assets/${firstTeamlogo(el)}`}
                width={100}
                height={100}
                alt="team"
              />
            </p>
            <p>{el.matchResult || el.time}</p>
            <p>
              <Image
                layout={'responsive'}
                src={`/images/assets/${secondTeamlogo(el)}`}
                width={100}
                height={100}
                alt="team"
              />
            </p>
            <div>
              <p>{el.firstTeam.name}</p>
              <span>V</span>
              <p>{el.secondTeam.name}</p>
            </div>
          </StyledMatchInfo>
          <StyledMatchLocation>{el.stadium}</StyledMatchLocation>
        </React.Fragment>
      ))}
    </StyledCardContainer>
  );
};

export default MatchDayCard;
