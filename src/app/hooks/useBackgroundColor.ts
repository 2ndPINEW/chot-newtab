import { useEffect, useState } from 'react';

export const useBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('#00000000');

  useEffect(() => {
    setTimeout(() => {
      setBackgroundColor(getColor());
    });
    const timer = setInterval(() => {
      setBackgroundColor(getColor());
    }, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  return [backgroundColor];
};

const getColor = () => {
  const now = new Date();
  const hour = now.getHours();
  if (5 <= hour && hour < 8) {
    return '#677fa3';
  } else if (8 <= hour && hour < 11) {
    return '#8EAAD3';
  } else if (11 <= hour && hour < 14) {
    return '#6C9BCF';
  } else if (14 <= hour && hour < 17) {
    return '#9CC5BF';
  } else if (17 <= hour && hour < 19) {
    return '#F2B880';
  } else if (19 <= hour && hour < 21) {
    return '#677fa3';
  } else {
    return '#41526b';
  }
};
