import {players} from 'db/players';
import {PlayerInterface} from 'interfaces/player';

interface GetPlayersApiInterface {
  getAllPlayers: () => PlayerInterface[];
}

const playersApi: GetPlayersApiInterface = {
  getAllPlayers: () => players,
  // getAllPlayers: async () => {
  //   try {
  //     const result = await fetch(
  //       `${process.env.NEXT_PUBLIC_BASEURL}/api/players`,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json; charset=utf-8',
  //         },
  //       }
  //     );

  //     const players = await result.json();
  //     return players;
  //   } catch (error) {}
  // },
};

export default playersApi;
