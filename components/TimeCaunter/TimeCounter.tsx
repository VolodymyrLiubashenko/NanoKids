import useDate from 'hooks/useDate';
import {useEffect, useState} from 'react';
import {
  StyledTimeContainer,
  StyledTimeCounterContainer,
  StiledTimeCounter,
} from './TimeCounter.styled';

interface TimeCounterPropsInterface {
  date?: Date;
}

const TimeCounter: React.FC<TimeCounterPropsInterface> = ({
  date = new Date(),
}) => {
  const {countTimeInterval} = useDate();
  const timeInterval = countTimeInterval(date);
  const [timer, setTimer] = useState(timeInterval);

  const {days, hours, minutes, seconds} = timer;
  console.log('date: ', date);

  useEffect(() => {
    const timerId = setInterval(() => setTimer(timeInterval), 1000);
    return () => clearInterval(timerId);
  });
  return (
    <StyledTimeCounterContainer>
      <StiledTimeCounter>
        <StyledTimeContainer $bgColor="linear-gradient(90deg, rgba(8,154,17,1) 0%, rgba(72,200,80,1) 100%)">
          <span>
            {days}
            <span>:</span>
          </span>
          <span>days</span>
        </StyledTimeContainer>
        <StyledTimeContainer $bgColor="linear-gradient(90deg, rgba(72,200,80,1) 0%, rgba(157,246,7,1) 100%)">
          <span>
            {hours}
            <span>:</span>
          </span>
          <span>hours</span>
        </StyledTimeContainer>
        <StyledTimeContainer $bgColor="linear-gradient(90deg, rgba(157,246,7,1) 0%, rgba(7,246,231,1) 100%)">
          <span>
            {minutes}
            <span>:</span>
          </span>
          <span>minutes</span>
        </StyledTimeContainer>
        <StyledTimeContainer $bgColor="linear-gradient(90deg, rgba(7,246,231,1) 0%, rgba(42,7,246,1) 100%)">
          <span>{seconds}</span>
          <span>seconds</span>
        </StyledTimeContainer>
      </StiledTimeCounter>
    </StyledTimeCounterContainer>
  );
};

export default TimeCounter;
