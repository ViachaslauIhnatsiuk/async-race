import React, { FC } from 'react';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { CarTracks } from './CarTracks/CarTracks';
import s from './Garage.module.css';

const Garage: FC = () => {
  return (
    <div className={s.wrapper}>
      <ControlPanel />
      <CarTracks />
    </div>
  );
};

export { Garage };