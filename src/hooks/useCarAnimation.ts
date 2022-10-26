import { useState, useRef } from 'react';
import { useCarEngine } from './useCarEngine';
import { IDriveResult } from '../types/GarageCar';

const useCarAnimation = () => {
  const [driveStatus, setDriveStatus] = useState<boolean>(false);
  const { startCar, stopCar, driveCar } = useCarEngine();
  const carReference = useRef<HTMLElement>(null);
  const animationState = useRef<number>(0);

  const move = (speed: number, distance: number): void => {
    let start = 0;
    const animationTime = distance / speed;
    const trackLength = window.innerWidth - 130;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const restOfTime: number = timestamp - start;
      const covered: number = Math.round(restOfTime * (trackLength / animationTime)) + 120;
      carReference.current!.style.transform = `translate(${covered}px, 4px)`;
      if (covered < trackLength) animationState.current = requestAnimationFrame(step);
    };
    animationState.current = requestAnimationFrame(step);
  };

  return {
    carReference,
    driveStatus,
    async startDriveCar(id: number): Promise<IDriveResult> {
      setDriveStatus(true);
      const { velocity, distance } = await startCar(id);
      const time = Number((Math.round(distance / velocity) / 1000).toFixed(2));
      move(velocity, distance);
      const { success } = await driveCar(id);
      if (!success) cancelAnimationFrame(animationState.current);
      return { success, id, time };
    },
    async stopDriveCar(id: number): Promise<void> {
      setDriveStatus(false);
      cancelAnimationFrame(animationState.current);
      await stopCar(id);
      if (carReference.current) carReference.current!.style.transform = 'translate(120px, 4px)';
    },
  };
};

export { useCarAnimation };