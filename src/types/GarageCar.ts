interface ICar {
  id: number;
  color: string;
  name: string;
}

interface IGarageCarData {
  name: string;
  color: string;
}

interface ICarStartData {
  velocity: number;
  distance: number;
}

interface ICarEngineStatus {
  success: boolean;
}

interface ICarDriveData {
  success: boolean;
  id: number;
  name: string;
  color: string;
  time: number;
}

type GetCarsData = {
  getRaceCarsData: (success: boolean, time: number, id: number, name: string, color: string) => void;
};

interface IDriveResult {
  success: boolean;
  id: number;
  time: number;
}

export type {
  ICar,
  IGarageCarData,
  ICarStartData,
  ICarEngineStatus,
  ICarDriveData,
  GetCarsData,
  IDriveResult,
};