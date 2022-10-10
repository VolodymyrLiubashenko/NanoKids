import {players} from 'db/players';
import {PlayerInterface} from 'interfaces/player';

interface GetPlayersApiInterface {
  getAllPlayers: () => PlayerInterface[];
}

const playersApi: GetPlayersApiInterface = {
  getAllPlayers: () => players,
};

export default playersApi;
