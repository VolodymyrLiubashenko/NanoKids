import {useState, useEffect} from 'react';
import useRouters from 'routes/useRouters';
import playersApi from 'api/playersApi';
import {useTeamContext} from 'context/TeamProvider';

const useHomePage = () => {
  const {team, changeTeam} = useTeamContext();
  const {query} = useRouters();
  const {getAllPlayers} = playersApi;
  const players = getAllPlayers().filter((el) => el.team === team);

  useEffect(() => {
    if (query.team instanceof Array) {
      changeTeam(query.team[0]);
      return;
    }
    if (query.team) {
      changeTeam(query.team);
    }
  }, [query.team]);
  return {players};
};

export default useHomePage;
