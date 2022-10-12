import {matches} from 'db/matches';
import {createDateFromString} from 'helpers/date';
import {MatchInterface} from 'interfaces/match';

interface MatchesApiInterface {
  getAllMatches: () => MatchInterface[];
}

const matchesApi: MatchesApiInterface = {
  getAllMatches: () => {
    return matches.map((el) => {
      const date = createDateFromString(String(el.date));
      return {...el, date};
    });
  },
};
export default matchesApi;
