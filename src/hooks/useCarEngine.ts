import { ICarEngineStatus, ICarStartData } from '../types/GarageCar';

const useCarEngine = () => {
  const URL = 'http://localhost:3000/engine';

  return {
    async startCar(id: number): Promise<ICarStartData> {
      return (await fetch(`${URL}?id=${id}&status=started`, {
        method: 'PATCH',
      })).json();
    },
    async stopCar(id: number): Promise<void> {
      await fetch(`${URL}?id=${id}&status=stopped`, {
        method: 'PATCH',
      });
    },
    async driveCar(id: number): Promise<ICarEngineStatus> {
      const response = await fetch(`${URL}?id=${id}&status=drive`, {
        method: 'PATCH',
      }).catch();
      return response.status !== 200 ? { success: false } : response.json();
    },
  };
};

export { useCarEngine };