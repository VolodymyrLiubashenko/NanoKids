import matchesApi from 'api/matchesApi';
import {useTeamContext} from 'context/TeamProvider';
import useDate from 'hooks/useDate';
import {isEmpty} from 'lodash';
import {useCallback, useEffect, useState} from 'react';
import useRouters from 'routes/useRouters';

const useMatcheSchedule = () => {
  const {team, changeTeam} = useTeamContext();
  const [nextMatchDate, setNextMatchDate] = useState<Date | undefined>(
    undefined
  );
  const {query} = useRouters();
  const {isEqualDates} = useDate();
  const {getAllMatches} = matchesApi;
  const matches = getAllMatches().filter((el) => el.team === team);
  console.log('matches: ', matches);

  useEffect(() => {
    console.log('query.team: ', query.team);
    if (query.team instanceof Array) {
      changeTeam(query.team[0]);
      return;
    }
    if (query.team) {
      changeTeam(query.team);
    }
  }, [query.team]);

  const findNextMatchDate = useCallback(() => {
    const dates = matches.filter((el) => el.date > new Date());
    console.log('dates: ', dates);
    if (isEmpty(dates)) {
      return undefined;
    }

    const date = dates.reduce((res, el) => {
      if (res < el.date) {
        return res;
      }
      return el.date;
    }, dates[0].date);
    return date;
  }, [team]);

  useEffect(() => {
    console.log('nextMatchDateinUseEffect: ', nextMatchDate);
    setNextMatchDate(findNextMatchDate());
  }, [findNextMatchDate]);
  const PreviusMatchDate = matches.reduce((date: Date, el) => {
    const newDate = el.date;
    if (newDate < new Date() && newDate > date) {
      return newDate;
    }
    return date;
  }, new Date(0));

  const previusMatches = matches.filter((el) =>
    isEqualDates(el.date, PreviusMatchDate)
  );
  const futureMatches = matches.filter((el) => {
    if (nextMatchDate) {
      return isEqualDates(el.date, nextMatchDate);
    }
  });

  return {previusMatches, futureMatches, nextMatchDate};
};

export default useMatcheSchedule;
