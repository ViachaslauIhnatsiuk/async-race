import { IServerWinner } from '../types/WinnerCar';

const useWinnerCarsGet = () => {
  const URL = 'http://localhost:3000/winners';

  const getWinner = async (id: number): Promise<IServerWinner> => (await fetch(`${URL}/${id}`)).json();

  const getWinners = async (): Promise<IServerWinner[]> => (await fetch(URL)).json();

  const getCurrentPageWinners = async (page: number, sort?: string, order?: string): Promise<IServerWinner[]> => {
    return (await fetch(`${URL}?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`)).json();
  };

  return {
    getWinner,
    getWinners,
    getCurrentPageWinners,
  };
};

export { useWinnerCarsGet };