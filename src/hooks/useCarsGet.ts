import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { ICar } from '../types/GarageCar';

const useCarsGet = () => {
  const { garageCars, garagePage, setGarageCars, setRaceCars } = useContext(AppContext);
  const URL = 'http://localhost:3000/garage';

  const getCar = async (id: number): Promise<void> => {
    const response = await fetch(`${URL}/${id}`);
    const car = await response.json();
    setGarageCars([...garageCars, car]);
  };

  const getCars = async (): Promise<void> => {
    const response = await fetch(URL);
    const cars = await response.json();
    setGarageCars(cars);
  };

  const getCurrentPageCars = async (page: number): Promise<ICar[]> => {
    return (await fetch(`${URL}?_page=${page}&_limit=7`)).json();
  };

  const setCarsForCurrentPage = async (): Promise<void> => {
    const cars = await getCurrentPageCars(garagePage);
    setRaceCars(cars);
  };

  return {
    getCar,
    getCars,
    getCurrentPageCars,
    setCarsForCurrentPage,
  };
};

export { useCarsGet };