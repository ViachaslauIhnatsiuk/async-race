import React, { FC } from 'react';
import { AppContext } from '../../../context/appContext';
import { useContext } from 'react';
import { IServerWinner } from '../../../types/WinnerCar';
import { ReactComponent as Car } from '../../../assets/car.svg';
import s from './Winner.module.css';

const Winner: FC<IServerWinner> = ({ id, wins, time, number }) => {
  const { garageCars } = useContext(AppContext);

  const getCarColor = (): string => garageCars.find((car) => car.id === id)!.color;

  const getCarName = (): string => garageCars.find((car) => car.id === id)!.name;

  return (
    <div className={s.wrapper}>
      <div className={s.number}>{number}</div>
      <Car className={s.car} fill={getCarColor()} />
      <div className={s.name}>{getCarName()}</div>
      <div className={s.wins}>{wins}</div>
      <div className={s.best}>{time} sec</div>
    </div>
  );
};

export { Winner };