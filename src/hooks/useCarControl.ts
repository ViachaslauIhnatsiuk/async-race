import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { IGarageCarData } from '../types/GarageCar';
import { useWinnerCarControl } from './useWinnerCarControl';

const useCarControl = () => {
  const { garageCars, setGarageCars } = useContext(AppContext);
  const { deleteWinnerCar } = useWinnerCarControl();
  const URL = 'http://localhost:3000/garage';

  return {
    async createCar(data: IGarageCarData): Promise<void> {
      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const newCar = await response.json();
      setGarageCars([...garageCars, newCar]);
    },
    async deleteCar(id: number): Promise<void> {
      await fetch(`${URL}/${id}`, {
        method: 'DELETE',
      });
      setGarageCars(garageCars.filter((car) => car.id !== id));
      await deleteWinnerCar(id);
    },
    async updateCar(id: number, data: IGarageCarData): Promise<void> {
      const response = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const updatedCar = await response.json();
      const carIndex = garageCars.findIndex((car) => car.id === id);
      garageCars.splice(carIndex, 1, updatedCar);
      setGarageCars([...garageCars]);
    },
  };
};

export { useCarControl };