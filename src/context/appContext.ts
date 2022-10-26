import { createContext } from 'react';
import { IContext } from '../types/Context';

const AppContext = createContext<IContext>({
  garageCars: [],
  garagePage: 1,
  raceCars: [],
  raceStatus: false,
  winnersPage: 1,
  winner: {
    success: false,
    id: 0,
    name: '',
    color: '',
    time: 0,
  },
  selectedCar: {
    color: '',
    id: 0,
    name: '',
  },
  setGarageCars: () => [],
  setGaragePage: () => 1,
  setRaceCars: () => [],
  setRaceStatus: () => false,
  setWinnersPage: () => 1,
  setWinner: () => { },
  setSelectedCar: () => { },
});

export { AppContext };