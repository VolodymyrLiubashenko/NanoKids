import {createContext, useContext, useEffect, useState} from 'react';

type Team = string;

interface initialTeamInterface {
  team: Team;
  changeTeam: (team: string) => void;
}

const initialTeam: initialTeamInterface = {
  team: 'firstTeam',
  changeTeam: (team) => {},
};

const TeamContext = createContext(initialTeam);

interface TeamContextProviderPropsInterface {
  children: React.ReactNode;
}

const TeamContextProvider: React.FC<TeamContextProviderPropsInterface> = ({
  children,
}) => {
  const [team, setTeam] = useState<Team>('firstTeam');

  const changeTeam = (team: string) => {
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
