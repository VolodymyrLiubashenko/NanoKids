import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs/promises';

const p = [
  {
    firstName: 'Vova',
    lastName: 'Liubashenko',
    tshirtNumber: 10,
    position: 'forward',
    team: 'firstTeam',
  },
  {
    firstName: 'Vova',
    lastName: 'Liubashenko',
    tshirtNumber: 17,
    position: 'forward',
    team: 'firstTeam',
  },
  {
    firstName: 'Yarik',
    lastName: 'Liubashenko',
    tshirtNumber: 11,
    position: 'forward',
    team: 'firstTeam',
  },
  {
    firstName: 'Andrew',
    lastName: 'Liubashenko',
    tshirtNumber: 12,
    position: 'forward',
    team: 'firstTeam',
  },
  {
    firstName: 'Dima',
    lastName: 'Liubashenko',
    tshirtNumber: 13,
    position: 'forward',
    team: 'secondTeam',
  },
  {
    firstName: 'Valera',
    lastName: 'Liubashenko',
    tshirtNumber: 14,
    position: 'forward',
    team: 'secondTeam',
  },
  {
    firstName: 'Semen',
    lastName: 'Liubashenko',
    tshirtNumber: 15,
    position: 'forward',
    team: 'secondTeam',
  },
];

export default async function handleGetPlayers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawData = await fs.readFile('db/players.json', 'utf8');
  const result = await JSON.parse(rawData);
  res.json(p);
}
