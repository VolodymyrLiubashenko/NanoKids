import {matches} from 'db/matches';
import {createDateFromString} from 'hooks/useDate';
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
  // getAllMatches: async () => {
  //   try {
  //     const data = await fetch(
  //       `${process.env.NEXT_PUBLIC_BASEURL}/api/matches`,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json; charset=utf-8',
  //         },
  //       }
  //     );

  //     const matches = await data.json();
  //     return matches;
  //   } catch (error) {}
  // },
};
export default matchesApi;
