import { useEffect, useState } from 'react';
import { useFont } from '../../app/hooks/useFont';

export const Clock = () => {
  const calcClock = () => {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
  };

  const [clock, setClock] = useState(calcClock());
  const [fontFamily] = useFont();

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(calcClock());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="text-5xl text-white"
      style={{
        fontFamily: fontFamily,
      }}
    >
      {clock}
    </div>
  );
};
