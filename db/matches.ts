import {TEAMS_NAMES} from './teams';
const {nanokids, tairovo, yaOdesit} = TEAMS_NAMES;
export interface RawMatchInterface {
  date: string; //MM.DD.YYYY exp (07.05.2022)  5 july 2022
  time: string;
  team: string;
  firstTeam: {name: string};
  secondTeam: {name: string};
  stadium: string;
  matchResult?: string;
}
export const matches = [
  {
    team: '2013',
    date: '16.10.2022',
    time: '12:00',
    firstTeam: {
      name: nanokids,
    },
    secondTeam: {
      name: nanokids,
    },
    stadium: 'Стадіон Чорноморець',
    matchResult: '3:7',
  },
  {
    team: '2014',
    date: '9.10.2022',
    time: '21:00',
    firstTeam: {
      name: yaOdesit,
    },
    secondTeam: {
      name: nanokids,
    },
    stadium: 'Стадіон Чорноморець',
    matchResult: '1:17',
  },
  {
    team: '2013',
    date: '8.10.2022',
    time: '21:00',
    firstTeam: {
      name: nanokids,
    },
    secondTeam: {
      name: tairovo,
    },
    stadium: 'Стадіон Чорноморець',
    matchResult: '3:3',
  },
  {
    team: '2014',
    date: '16.10.2022',
    time: '21:00',
    firstTeam: {
      name: nanokids,
    },
    secondTeam: {
      name: yaOdesit,
    },
    stadium: 'Стадіон Чорноморець',
    matchResult: '13:0',
  },
];
