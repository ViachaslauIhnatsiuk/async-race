import React, { FC, useContext } from 'react';
import { AppContext } from '../../../../context/appContext';
import { useCarsGenerate } from '../../../../hooks/useCarsGenerate';
import s from './CarRace.module.css';

const CarRace: FC = () => {
  const { raceStatus, setRaceStatus, setWinner } = useContext(AppContext);
  const { generateCars } = useCarsGenerate();

  const resetRace = (): void => {
    setRaceStatus(false);
    setWinner({ success: false, id: 0, name: '', color: '', time: 0 });
  };

  return (
    <div className={s.wrapper}>
      <button className={s.button} disabled={raceStatus} onClick={() => setRaceStatus(true)}>RACE</button>
      <button className={s.button} disabled={!raceStatus} onClick={resetRace}>RESET</button>
      <button className={s.button} onClick={generateCars}>GENERATE CARS</button>
    </div>
  );
};

export { CarRace };