import React, { FC, useEffect, useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { useSortWinners } from '../../hooks/useSortWinners';
import { IServerWinner } from '../../types/WinnerCar';
import { Winner } from './Winner/Winner';
import s from './Winners.module.css';

const Winners: FC = () => {
  const { winnersPage, setWinnersPage, setRaceStatus, setWinner } = useContext(AppContext);
  const { currentPageWinners, totalWinnersAmount, getAllWinnersCars, setSortParams } = useSortWinners();
  const carsPerPage = 10;

  useEffect(() => {
    getAllWinnersCars();
    setWinner({ success: false, id: 0, name: '', color: '', time: 0 });
    setRaceStatus(false);
  }, []);

  return (
    <div className={s.wrapper}>
      <h2 className={s.amount}>Winners ({totalWinnersAmount.length})</h2>
      <h4 className={s.page}>Page #{winnersPage}</h4>
      <div className={s.header}>
        <div className={s.number}>Number</div>
        <div className={s.car}>Car</div>
        <div className={s.name}>Name</div>
        <div className={s.wins} onClick={() => setSortParams('wins')}>Wins</div>
        <div className={s.best} onClick={() => setSortParams('time')}>Best time</div>
      </div>
      {currentPageWinners.map((car: IServerWinner, index: number) => <Winner {...car} key={car.id} number={(index + 1) + (winnersPage - 1) * carsPerPage} />)}
      {totalWinnersAmount.length > 0
        ? <div className={s.pagination}>
          <button className={s.button} disabled={winnersPage === 1} onClick={() => setWinnersPage(winnersPage - 1)}>PREV</button>
          <button className={s.button} disabled={winnersPage === Math.ceil(totalWinnersAmount.length / carsPerPage)} onClick={() => setWinnersPage(winnersPage + 1)}>NEXT</button>
        </div>
        : <div className={s.pagination}>
          <button className={s.button} disabled>PREV</button>
          <button className={s.button} disabled>NEXT</button>
        </div>
      }
    </div>
  );
};

export { Winners };