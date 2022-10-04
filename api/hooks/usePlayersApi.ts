import {useQuery} from '@tanstack/react-query';
import playersApi from 'api/playersApi';

const usePlayersApi = (team: string = 'firstTeam') => {
  const {data, isFetched} = useQuery(['getPlayers'], playersApi.getAllPlayers, {
    initialData: [],
  });

  const players = data.filter((el) => el.team === team);

  return {players, isFetched};
};

export default usePlayersApi;
