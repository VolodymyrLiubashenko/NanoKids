import useDate from 'hooks/useDate';
import {MatchInterface} from 'interfaces/match';
import {useState, useEffect} from 'react';

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

export const useMatchDayCard = (matchDayOptions: MatchInterface[]) => {
  const [state, setState] = useState(initialMatchDyOptions);

  useEffect(() => {
    setState(matchDayOptions);
  }, [matchDayOptions]);

  const {formatDate} = useDate();
  const date = state[0].date;
  const month = formatDate(date, 'MMMM');
  const weekDay = formatDate(date, 'EEEE');
  const day = formatDate(date, 'dd');

  return {month, weekDay, day, state};
};
export default useMatchDayCard;
