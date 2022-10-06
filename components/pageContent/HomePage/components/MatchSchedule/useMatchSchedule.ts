import useMatchesApi from 'api/hooks/useMatchesApi';
import useDate from 'hooks/useDate';
import {isEmpty} from 'lodash';
import {useEffect} from 'react';
import useRouters from 'routes/useRouters';

const useMatcheSchedule = () => {
  const {query} = useRouters();
  if (query.team instanceof Array) {
    query.team = query.team[0];
  }
  const {isEqualDates} = useDate();
  const {matches, isFetched} = useMatchesApi(query.team);

  const findNextMatchDate = () => {
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
  };

  const nextMatchDate = findNextMatchDate();
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

  return {previusMatches, futureMatches, isFetched, nextMatchDate};
};

export default useMatcheSchedule;
