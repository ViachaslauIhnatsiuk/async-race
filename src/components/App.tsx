import React, { FC, useState } from 'react';
import { AppContext } from '../context/appContext';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Garage } from './Garage/Garage';
import { Winners } from './Winners/Winners';
import { Footer } from './Footer/Footer';
import { ICar, ICarDriveData } from '../types/GarageCar';
import s from './App.module.css';

const App: FC = () => {
  const [garageCars, setGarageCars] = useState<ICar[]>([]);
  const [garagePage, setGaragePage] = useState<number>(1);
  const [raceCars, setRaceCars] = useState<ICar[]>([]);
  const [raceStatus, setRaceStatus] = useState<boolean>(false);
  const [winnersPage, setWinnersPage] = useState<number>(1);
  const [winner, setWinner] = useState<ICarDriveData>({ success: false, id: 0, name: '', color: '', time: 0 });
  const [selectedCar, setSelectedCar] = useState<ICar>({
    color: '#ffffff',
    id: 0,
    name: '',
  });

  return (
    <AppContext.Provider value={{
      garageCars,
      garagePage,
      raceCars,
      raceStatus,
      winnersPage,
      winner,
      selectedCar,
      setGarageCars,
      setGaragePage,
      setRaceCars,
      setRaceStatus,
      setWinnersPage,
      setWinner,
      setSelectedCar,
    }}>
      <div className={s.app}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Garage />} />
          <Route path='/winners' element={<Winners />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export { App };