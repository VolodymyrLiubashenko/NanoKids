import useRouters from 'routes/useRouters';
import usePlayersApi from 'api/hooks/usePlayersApi';

const useHomePage = () => {
  const {query} = useRouters();
  if (query.team instanceof Array) {
    query.team = query.team[0];
  }
  const {players, isFetched} = usePlayersApi(query.team);

  return {players, isFetched};
};

export default useHomePage;
