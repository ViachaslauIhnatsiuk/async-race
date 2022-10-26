import { Dispatch, SetStateAction } from 'react';
import { ICar, ICarDriveData } from './GarageCar';

interface IContext {
  garageCars: ICar[];
  garagePage: number;
  raceCars: ICar[];
  raceStatus: boolean;
  winnersPage: number;
  winner: ICarDriveData;
  selectedCar: ICar;
  setGarageCars: Dispatch<SetStateAction<ICar[]>>;
  setGaragePage: Dispatch<SetStateAction<number>>;
  setRaceCars: Dispatch<SetStateAction<ICar[]>>;
  setRaceStatus: Dispatch<SetStateAction<boolean>>;
  setWinnersPage: Dispatch<SetStateAction<number>>;
  setWinner: Dispatch<SetStateAction<ICarDriveData>>;
  setSelectedCar: Dispatch<SetStateAction<ICar>>;
}

export type { IContext };