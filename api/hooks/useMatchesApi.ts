import {useQuery} from '@tanstack/react-query';
import matchesApi from 'api/matchesApi';
import useDate from 'hooks/useDate';

const useMatchesApi = (team: string = 'firstTeam') => {
  const {createDateFromString} = useDate();
  const {data, isFetched} = useQuery(['getMatches'], matchesApi.getAllMatches, {
    initialData: [
      {
        date: new Date(),
        firstTeam: {name: 'NanoKids', logo: 'nanokids.png'},
        matchResult: '2:1',
        secondTeam: {name: 'NanoKids', logo: 'nanokids.png'},
        stadium: 'Old Traford',
        team: 'firstTeam',
        time: '21:00',
      },
    ],
  });
  const matches = data.filter((el) => el.team === team);

  return {matches, isFetched};
};

export default useMatchesApi;
