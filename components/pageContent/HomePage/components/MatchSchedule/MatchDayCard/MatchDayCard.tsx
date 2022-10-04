import useDate from 'hooks/useDate';
import {MatchInterface} from 'interfaces/match';
import Image from 'next/image';
import React from 'react';
import {
  StyledCardContainer,
  StyledMatchDate,
  StyledCardHeader,
  StyledMatchInfo,
  StyledMatchLocation,
} from './MatchDayCard.styled';

interface MatchDayCardPropsInterface {
  matchDayOptions: MatchInterface[];
}

const MatchDayCard: React.FC<MatchDayCardPropsInterface> = ({
  matchDayOptions,
}) => {
  const {formatDate} = useDate();

  const date = matchDayOptions[0].date;
  const month = formatDate(date, 'MMMM');
  const weekDay = formatDate(date, 'EEEE');
  const day = formatDate(date, 'dd');

  return (
    <StyledCardContainer>
      <StyledCardHeader>
        <StyledMatchDate>
          <span>{day}</span>
          <p>
            <span>{weekDay}</span> <br />
            {month}
          </p>
        </StyledMatchDate>
      </StyledCardHeader>
      {matchDayOptions.map((el, i) => (
        <React.Fragment key={i}>
          <StyledMatchInfo>
            <p>
              <Image
                src={'/images/essets/Manchester_United.webp'}
                width={100}
                height={100}
                alt=""
              />
            </p>

            <p>{el.matchResult || el.time}</p>
            <p>
              <Image
                src={'/images/essets/FC_Barcelona.png'}
                width={100}
                height={100}
                alt=""
              />
            </p>
            <div>
              <p>{el.firstTeam.name}</p>
              <span>V</span>
              <p>{el.secondTeam.name}</p>
            </div>
          </StyledMatchInfo>
          <StyledMatchLocation>{el.stadium} </StyledMatchLocation>
        </React.Fragment>
      ))}
    </StyledCardContainer>
  );
};

export default MatchDayCard;
