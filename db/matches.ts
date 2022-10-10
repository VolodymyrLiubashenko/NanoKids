export interface RawMatchInterface {
  date: string; //MM.DD.YYYY exp (07.05.2022)  5 july 2022
  time: string;
  team: string;
  firstTeam: {name: string; logo: string};
  secondTeam: {name: string; logo: string};
  stadium: string;
  matchResult?: string;
}
export const matches = [
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
    date: '10.15.2022',
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
