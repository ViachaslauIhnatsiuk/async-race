import React, { FC, useContext, useEffect } from 'react';
import { AppContext } from '../../../context/appContext';
import { useCarsGet } from '../../../hooks/useCarsGet';
import { useWinnerCarControl } from '../../../hooks/useWinnerCarControl';
import { useWinnerCarsGet } from '../../../hooks/useWinnerCarsGet';
import { CarTrack } from './CarTrack/CarTrack';
import { ICar } from '../../../types/GarageCar';
import s from './CarTracks.module.css';

const CarTracks: FC = () => {
  const { garageCars, garagePage, raceCars, winner, setGaragePage, setWinner } = useContext(AppContext);
  const { getCars, setCarsForCurrentPage } = useCarsGet();
  const { createWinnerCar, updateWinnerCar } = useWinnerCarControl();
  const { getWinner } = useWinnerCarsGet();
  let flag = false;

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    setCarsForCurrentPage();
  }, [garagePage, garageCars]);

  const getRaceCarsData = async (success: boolean, time: number, id: number, name: string, color: string): Promise<void> => {
    if (!flag) {
      if (success) {
        flag = true;
        const raceWinner = { success, time, id, name, color };
        setWinner(raceWinner);
        const serverWinner = await getWinner(raceWinner.id);
        serverWinner.id
          ? updateWinnerCar({ id: raceWinner.id, wins: serverWinner.wins + 1, time: raceWinner.time < serverWinner.time ? raceWinner.time : serverWinner.time })
          : createWinnerCar({ id: raceWinner.id, wins: 1, time: raceWinner.time });
      }
    }
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.amount}>Garage ({garageCars.length})</h2>
      {winner.id !== 0 ? <div className={s.winner}>{winner.name} went first ({winner.time}s)!</div> : null}
      <h4 className={s.page}>Page #{garagePage}</h4>
      {raceCars.map((car: ICar) => <CarTrack {...car} key={car.id} getRaceCarsData={getRaceCarsData} />)}
      {garageCars.length && <div className={s.pagination}>
        <button className={s.button} disabled={garagePage === 1} onClick={() => setGaragePage(garagePage - 1)}>PREV</button>
        <button className={s.button} disabled={garagePage === Math.ceil(garageCars.length / 7)} onClick={() => setGaragePage(garagePage + 1)}>NEXT</button>
      </div>}
    </div>
  );
};

export { CarTracks };