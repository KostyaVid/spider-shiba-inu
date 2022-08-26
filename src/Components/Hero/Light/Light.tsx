import { useState, useEffect } from 'react';
import s from './Light.module.scss';

interface ILightProps {
  width?: number;
  color?: string;
  duration?: number;
  doubleColor?: string;
}

const Light = ({
  width = 50,
  color = '225, 29, 29',
  duration = 3000,
  doubleColor,
}: ILightProps) => {
  function generateRandom() {
    return Math.floor(Math.random() * 100);
  }
  const [randomPosition, setRandomPosition] = useState<[number, number]>([
    generateRandom(),
    generateRandom(),
  ]);

  useEffect(() => {
    setRandomPosition([generateRandom(), generateRandom()]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRandomPosition([generateRandom(), generateRandom()]);
    }, duration);
  }, [randomPosition]);

  return (
    <div
      className={s.light}
      style={{
        width: `${width}vw`,
        height: `${width}vw`,
        background: `radial-gradient(30% 30% at 50% 50%, rgba(${color}, 0.3) 0%, rgba(${color}, 0) 100%)`,
        left: `${randomPosition[0]}%`,
        top: `${randomPosition[1]}%`,
        transform: `translate(-50%, -50%)`,
        transitionDuration: `${duration}ms`,
      }}>
      {doubleColor && (
        <div
          className={s.light}
          style={{
            width: `${width}vw`,
            height: `${width}vw`,
            background: `radial-gradient(30% 30% at 50% 50%, rgba(${doubleColor}, 0.2) 0%, rgba(${doubleColor}, 0) 100%)`,
            left: `${randomPosition[0]}%`,
            top: `${randomPosition[1]}%`,
            transform: `translate(-50%, -50%)`,
            transitionDuration: `${duration}ms`,
          }}></div>
      )}
    </div>
  );
};

export default Light;
