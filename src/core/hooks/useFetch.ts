import { useQuery } from '@tanstack/react-query';
import browser from 'webextension-polyfill';

import { getContribution } from '../api/github';
import { getWeatherData } from '../api/openmetro';
import { contributesInitialData } from '../constants/initialData';
import { QUERY_KEYS } from '../constants/queryKeys';

export const useFetchContributes = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.CONTRIBUTES],
    queryFn: async () => {
      const { userId } = await browser.storage.sync.get('userId');
      if (!userId) throw new Error('userId is not found');
      return await getContribution(userId);
    },
    initialData: contributesInitialData,
  });
};

export const useFetchWeather = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.WEATHER],
    queryFn: async () => {
      const geoLocation = await getGeoLocation();
      return await getWeatherData({
        latitude: geoLocation.coords.latitude,
        longitude: geoLocation.coords.longitude,
      });
    },
  });
};

const getGeoLocation = async () => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
