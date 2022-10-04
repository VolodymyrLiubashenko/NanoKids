import {MatchInterface} from 'interfaces/match';

interface MatchesApiInterface {
  getAllMatches: () => Promise<MatchInterface[]>;
}

const matchesApi: MatchesApiInterface = {
  getAllMatches: async () => {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/matches`
      );

      const matches = await data.json();
      return matches;
    } catch (error) {}
  },
};

export default matchesApi;
