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
    date: '10.16.2022',
    time: '12:00',
    firstTeam: {
      name: 'NanoKids',
    },
    secondTeam: {
      name: 'Я одесит',
    },
    stadium: 'Стадіон Чорноморець',
    matchResult: '',
  },
  {
    team: '2014',
    date: '10.9.2022',
    time: '21:00',
    firstTeam: {
      name: 'Я одесит',
    },
    secondTeam: {
      name: 'NanoKids',
    },
    stadium: 'Стадіон Чорноморець',
    matchResult: '1:17',
  },
  {
    team: '2013',
    date: '10.8.2022',
    time: '21:00',
    firstTeam: {
      name: 'NanoKids',
    },
    secondTeam: {
      name: 'ФК Таірово',
    },
    stadium: 'Стадіон Чорноморець',
    matchResult: '3:3',
  },
  {
    team: '2014',
    date: '10.16.2022',
    time: '21:00',
    firstTeam: {
      name: 'NanoKids',
    },
    secondTeam: {
      name: 'ФК Таірово',
    },
    stadium: 'Стадіон Чорноморець',
    matchResult: '',
  },
];
