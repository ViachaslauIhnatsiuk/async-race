import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';
import { IServerWinner } from '../types/WinnerCar';
import { useWinnerCarsGet } from './useWinnerCarsGet';

const useSortWinners = () => {
  const [currentPageWinners, setCurrentPageWinners] = useState<IServerWinner[]>([]);
  const [totalWinnersAmount, setTotalWinnersAmount] = useState<IServerWinner[]>([]);
  const [sortType, setSortType] = useState<string>('wins');
  const [sortOrder, setSortOrder] = useState<boolean>(false);
  const { winnersPage } = useContext(AppContext);
  const { getWinners, getCurrentPageWinners } = useWinnerCarsGet();

  const getAllWinnersCars = async (): Promise<void> => {
    const allWinners = await getWinners();
    setTotalWinnersAmount(allWinners);
  };

  const sortWinners = async (): Promise<void> => {
    if (sortOrder) {
      const carsByTimeLowToHigh = await getCurrentPageWinners(winnersPage, sortType, 'ASC');
      setCurrentPageWinners(carsByTimeLowToHigh);
    } else {
      const carsByTimeHighToLow = await getCurrentPageWinners(winnersPage, sortType, 'DESC');
      setCurrentPageWinners(carsByTimeHighToLow);
    }
  };

  const setSortParams = (type: string): void => {
    setSortType(type);
    setSortOrder(!sortOrder);
  };

  useEffect(() => {
    sortWinners();
  }, [sortOrder, winnersPage]);

  return {
    getAllWinnersCars,
    setSortParams,
    setSortOrder,
    setSortType,
    currentPageWinners,
    totalWinnersAmount,
  };
};

export { useSortWinners };