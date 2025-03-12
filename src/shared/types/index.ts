export interface IMatch {
  awayScore: number;
  homeScore: number;
  status: 'Scheduled' | 'Ongoing' | 'Finished';
  time: string;
  title: string;
  awayTeam: ITeam;
  homeTeam: ITeam;
}

interface ITeam {
  name: string;
  place: number;
  points: number;
  total_kills: number;
  players: IPlayer[];
}

interface IPlayer {
  username: string;
  kills: number;
}
