import {useState, useEffect} from 'react';
import {players} from 'db/players';
import useRouters from 'routes/useRouters';
import playersApi from 'api/playersApi';

const useHomePage = () => {
  const [team, setTeam] = useState('firstTeam');
  const {query} = useRouters();
  const {getAllPlayers} = playersApi;
  const players = getAllPlayers().filter((el) => el.team === team);

  useEffect(() => {
    if (query.team instanceof Array) {
      setTeam(query.team[0]);
      return;
    }
    if (query.team) {
      setTeam(query.team);
    }
  }, [query.team]);
  return {players};
};

export default useHomePage;
