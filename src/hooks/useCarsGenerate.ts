import { useCarControl } from './useCarControl';
import { useCarsGet } from './useCarsGet';
import { models } from '../data/models';
import { cars } from '../data/cars';

const useCarsGenerate = () => {
  const { createCar } = useCarControl();
  const { getCars } = useCarsGet();

  return {
    generateCars() {
      for (let i = 0; i < 100; i++) {
        const randomName = `${cars[Math.round(Math.random() * 39)]} ${models[Math.round(Math.random() * 59)]}`;
        const randomColor = `#${Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, '0')}`;
        createCar({ name: randomName, color: randomColor });
      }
      getCars();
    },
  };
};

export { useCarsGenerate };