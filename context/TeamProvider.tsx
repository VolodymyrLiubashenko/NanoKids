import {useRouter} from 'next/router';
import {createContext, useContext, useEffect, useState} from 'react';

type Team = 'firstTeam' | 'secondTeam';

interface initialTeamInterface {
  team: Team;
  changeTeam: (team: 'firstTeam' | 'secondTeam') => void;
}

const initialTeam: initialTeamInterface = {
  team: 'firstTeam',
  changeTeam: (team: 'firstTeam' | 'secondTeam') => {},
};

const TeamContext = createContext(initialTeam);

interface TeamContextProviderPropsInterface {
  children: React.ReactNode;
}

const TeamContextProvider: React.FC<TeamContextProviderPropsInterface> = ({
  children,
}) => {
  const [team, setTeam] = useState<Team>('firstTeam');

  const changeTeam = (team: 'firstTeam' | 'secondTeam') => {
    setTeam(team);
  };
  return (
    <TeamContext.Provider value={{team, changeTeam}}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeamContext = () => {
  return useContext(TeamContext);
};

export default TeamContextProvider;
