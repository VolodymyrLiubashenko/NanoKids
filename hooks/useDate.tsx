import intervalToDuration from 'date-fns/intervalToDuration';
import {format} from 'date-fns';
import startOfTomorrow from 'date-fns/startOfTomorrow';
import isEqual from 'date-fns/isEqual';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import {uk} from 'date-fns/locale';

const useDate = () => {
  setDefaultOptions({locale: uk});
  const createDateFromString = (str: string) => {
    return new Date(str);
  };

  const getTomorrowDate = () => {
    return startOfTomorrow();
  };

  const isEqualDates = (date1: Date, date2: Date) => {
    return isEqual(date1, date2);
  };

  const formatDate = (
    date: Date = new Date(),
    formatString: string = 'MMMM'
  ) => {
    return format(date, formatString);
  };

  const countTimeInterval = (endDate: Date) => {
    const now = new Date();
    const duration: any = intervalToDuration({start: now, end: endDate});
    for (let key in duration) {
      if (duration[key] < 10) {
        duration[key] = `0${duration[key]}`;
      }
      duration[key] = `${duration[key]}`;
    }
    return duration;
  };

  return {
    createDateFromString,
    formatDate,
    countTimeInterval,
    getTomorrowDate,
    isEqualDates,
  };
};

export default useDate;