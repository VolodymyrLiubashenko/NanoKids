import useDate from 'hooks/useDate';
import {MatchInterface} from 'interfaces/match';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
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

const initialMatchDyOptions: MatchInterface[] = [
  {
    date: new Date(),
    firstTeam: {logo: '', name: ''},
    secondTeam: {logo: '', name: ''},
    stadium: '',
    team: '',
    time: '',
    matchResult: '',
  },
];

const MatchDayCard: React.FC<MatchDayCardPropsInterface> = ({
  matchDayOptions,
}) => {
  const [state, setState] = useState(initialMatchDyOptions);

  useEffect(() => {
    setState(matchDayOptions);
  }, [matchDayOptions]);

  const {formatDate} = useDate();
  const date = state[0].date;
  const month = formatDate(date, 'MMMM');
  const weekDay = formatDate(date, 'EEEE');
  const day = formatDate(date, 'dd');

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
          <StyledMatchLocation>{el.stadium}</StyledMatchLocation>
        </React.Fragment>
      ))}
    </StyledCardContainer>
  );
};

export default MatchDayCard;
