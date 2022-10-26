import React, { FC } from 'react';
import { CarCreate } from './CarCreate/CarCreate';
import { CarUpdate } from './CarUpdate/CarUpdate';
import { CarRace } from './CarRace/CarRace';
import s from './ControlPanel.module.css';

const ControlPanel: FC = () => {
  return (
    <div className={s.wrapper}>
      <CarCreate />
      <CarUpdate />
      <CarRace />
    </div>
  );
};

export { ControlPanel };