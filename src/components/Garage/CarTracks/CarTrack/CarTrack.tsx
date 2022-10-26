import React, { FC, useContext, useEffect } from 'react';
import { AppContext } from '../../../../context/appContext';
import { useCarControl } from '../../../../hooks/useCarControl';
import { useCarAnimation } from '../../../../hooks/useCarAnimation';
import { GetCarsData, ICar } from '../../../../types/GarageCar';
import { ReactComponent as Car } from '../../../../assets/car.svg';
import { ReactComponent as Flag } from '../../../../assets/flag.svg';
import s from './CarTrack.module.css';

const CarTrack: FC<ICar & GetCarsData> = ({ color, id, name, getRaceCarsData }) => {
  const { raceStatus, setSelectedCar } = useContext(AppContext);
  const { driveStatus, carReference, startDriveCar, stopDriveCar } = useCarAnimation();
  const { deleteCar } = useCarControl();

  const startRace = async (): Promise<void> => {
    const raceResult = await startDriveCar(id);
    getRaceCarsData(raceResult.success, raceResult.time, id, name, color);
  };

  useEffect(() => {
    if (raceStatus) startRace();
    if (!raceStatus) stopDriveCar(id);
  }, [raceStatus]);

  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <button className={s.button} onClick={() => setSelectedCar({ color, id, name })}>SELECT</button>
        <button className={s.button} onClick={() => deleteCar(id)}>REMOVE</button>
        <div className={s.title}>{name}</div>
      </div>
      <div className={s.track}>
        <div className={s.controls}>
          <button className={s.start} disabled={driveStatus} onClick={() => startDriveCar(id)}>START</button>
          <button className={s.stop} disabled={!driveStatus} onClick={() => stopDriveCar(id)}>STOP</button>
        </div>
        <Car className={s.car} fill={color} ref={carReference} />
        <Flag className={s.flag} />
      </div>
    </div>
  );
};

export { CarTrack };