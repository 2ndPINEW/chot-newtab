import { useEffect, useState } from 'react';
import { IParticlesOptions } from 'tsparticles-engine';

import { useFetchWeather } from './useFetch';
import { rain, snow } from '../constants/particle';

export const useWeatherParticle = () => {
  const [particles, setParticles] = useState<IParticlesOptions | undefined>(undefined);
  const { data: weathers } = useFetchWeather();

  useEffect(() => {
    if (!weathers) return;
    const weather = weathers[0];
    if (weather.precipitationProbabilityMax > 65) {
      const strong = weather.precipitationSum * 10;
      const particle = weather.snowfallSum > 0 ? snow(strong) : rain(strong);
      setParticles(particle);
    }
  }, [weathers]);

  return [particles];
};
