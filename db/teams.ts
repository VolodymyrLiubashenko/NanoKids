export interface TeamInterface {
  name: string;
  logo: string;
}

export const TEAMS_NAMES = {
  nanokids: 'NanoKids',
  chornomorec: 'Чорноморець',
  yaOdesit: 'Я одесит',
  tairovo: 'ФК Таірово',
};

const {nanokids, chornomorec, yaOdesit, tairovo} = TEAMS_NAMES;

const teams: TeamInterface[] = [
  {
    name: nanokids,
    logo: 'nanokids.jpg',
  },
  {
    name: chornomorec,
    logo: 'chernomorets.jpg',
  },
  {
    name: yaOdesit,
    logo: 'yaodesit.jpg',
  },
  {
    name: tairovo,
    logo: 'tairovo.png',
  },
];

export default teams;
