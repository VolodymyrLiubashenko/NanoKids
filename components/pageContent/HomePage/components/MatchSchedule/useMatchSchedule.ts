import matchesApi from 'api/matchesApi';
import {useTeamContext} from 'context/TeamProvider';
import {isEqualDates} from 'helpers/date';
import {isEmpty} from 'lodash';
import {useCallback, useEffect, useState} from 'react';
import useRouters from 'routes/useRouters';

const useMatcheSchedule = () => {
  const {query} = useRouters();
  const {team, changeTeam} = useTeamContext();
  const [nextMatchDate, setNextMatchDate] = useState<Date | undefined>(
    undefined
  );

  const {getAllMatches} = matchesApi;
  const matches = getAllMatches().filter((el) => el.team === team);

  useEffect(() => {
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
    setNextMatchDate(findNextMatchDate());
  }, [findNextMatchDate]);

  const previusMatchDate = matches.reduce((date: Date, el) => {
    const newDate = el.date;
    if (newDate < new Date() && newDate > date) {
      return newDate;
    }
    return date;
  }, new Date(0));

  const previusMatches = matches.filter((el) =>
    isEqualDates(el.date, previusMatchDate)
  );
  const futureMatches = matches.filter((el) => {
    if (nextMatchDate) {
      return isEqualDates(el.date, nextMatchDate);
    }
  });

  return {previusMatches, futureMatches, nextMatchDate};
};

export default useMatcheSchedule;
