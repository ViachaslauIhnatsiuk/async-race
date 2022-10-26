import React, { FC, useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../../context/appContext';
import { useCarControl } from '../../../../hooks/useCarControl';
import { IGarageCarData } from '../../../../types/GarageCar';
import s from './CarUpdate.module.css';

const CarUpdate: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [color, setColor] = useState<string>('#ffffff');
  const { selectedCar, setSelectedCar } = useContext(AppContext);
  const { updateCar } = useCarControl();

  useEffect(() => {
    setInputValue(selectedCar.name);
    setColor(selectedCar.color);
  }, [selectedCar]);

  const updateSelectedCar = (id: number, data: IGarageCarData): void => {
    updateCar(id, data);
    setSelectedCar({ color: '#ffffff', id: 0, name: '' });
  };

  return (
    <div className={s.wrapper}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        disabled={selectedCar.id === 0}
      />
      <input
        className={s.input}
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
        disabled={selectedCar.id === 0}
      />
      <button
        className={s.button}
        onClick={() => updateSelectedCar(selectedCar.id, { name: inputValue, color: color })}
        disabled={selectedCar.id === 0}>
        UPDATE
      </button>
    </div>
  );
};

export { CarUpdate };