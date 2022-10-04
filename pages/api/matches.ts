import type {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';

const test = [
  {
    team: 'secondTeam',
    date: '09.30.2022',
    time: '21:00',
    firstTeam: {
      name: 'NanoKids',
      logo: 'nanokids.png',
    },
    secondTeam: {
      name: 'NanoKids',
      logo: 'nanokids.png',
    },
    stadium: 'Old Traford',
    matchResult: '2:1',
  },
  {
    team: 'firstTeam',
    date: '09.30.2022',
    time: '21:00',
    firstTeam: {
      name: 'NanoKids',
      logo: 'nanokids.png',
    },
    secondTeam: {
      name: 'NanoKids',
      logo: 'nanokids.png',
    },
    stadium: 'Old Traford',
    matchResult: '2:1',
  },
  {
    team: 'firstTeam',
    date: '09.15.2022',
    time: '21:00',
    firstTeam: {
      name: 'NanoKids',
      logo: 'nanokids.png',
    },
    secondTeam: {
      name: 'NanoKids',
      logo: 'nanokids.png',
    },
    stadium: 'Old Traford',
    matchResult: '',
  },
  {
    team: 'secondTeam',
    date: '10.10.2022',
    time: '21:00',
    firstTeam: {
      name: 'NanoKids',
      logo: 'nanokids.png',
    },
    secondTeam: {
      name: 'NanoKids',
      logo: 'nanokids.png',
    },
    stadium: 'Old Traford',
    matchResult: '',
  },
];

export default async function handleGetMatches(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const rawData = fs.readFileSync('db/matches.json', 'utf8');
  // const matches = JSON.parse(rawData);
  res.json(test);
}
