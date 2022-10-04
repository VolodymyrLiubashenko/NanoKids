import {PlayerInterface} from 'interfaces/player';

interface GetPlayersApiInterface {
  getAllPlayers: () => Promise<PlayerInterface[]>;
}

const playersApi: GetPlayersApiInterface = {
  getAllPlayers: async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/players`
      );

      const players = await result.json();
      return players;
    } catch (error) {}
  },
};

export default playersApi;
