export interface MatchInterface {
  date: Date; //MM.DD.YYYY exp (07.05.2022)  5 july 2022
  time: string;
  team: string;
  firstTeam: {name: string};
  secondTeam: {name: string};
  stadium: string;
  matchResult?: string;
}
