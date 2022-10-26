import React, { FC, useState } from 'react';
import { useCarControl } from '../../../../hooks/useCarControl';
import { IGarageCarData } from '../../../../types/GarageCar';
import s from './CarCreate.module.css';

const CarCreate: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [color, setColor] = useState<string>('#ffffff');
  const { createCar } = useCarControl();

  const createNewCar = (data: IGarageCarData): void => {
    createCar(data);
    setInputValue('');
    setColor('#ffffff');
  };

  return (
    <div className={s.wrapper}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <input
        className={s.input}
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <button className={s.button} onClick={() => createNewCar({ name: inputValue, color: color })}>CREATE</button>
    </div>
  );
};

export { CarCreate };