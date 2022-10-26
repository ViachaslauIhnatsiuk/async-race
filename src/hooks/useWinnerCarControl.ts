import { IWinnerCarData } from '../types/WinnerCar';

const useWinnerCarControl = () => {
  const URL = 'http://localhost:3000/winners';

  return {
    async createWinnerCar(data: IWinnerCarData): Promise<void> {
      await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    },
    async deleteWinnerCar(id: number): Promise<void> {
      await fetch(`${URL}/${id}`, {
        method: 'DELETE',
      });
    },
    async updateWinnerCar(data: IWinnerCarData): Promise<void> {
      await fetch(`${URL}/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    },
  };
};

export { useWinnerCarControl };