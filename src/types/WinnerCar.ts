interface IWinner {
  id: number;
  name: string;
  color: string;
  time: number;
  wins: number;
}

interface IServerWinner {
  [key: string]: number;
}

interface IWinnerCarData {
  id: number;
  wins: number;
  time: number;
}

export type {
  IWinner,
  IServerWinner,
  IWinnerCarData,
};