import { useQuery } from '@tanstack/react-query';
import { getContribution } from '../api/github';
import { QUERY_KEYS } from '../constants/queryKeys';
import { contributesInitialData } from '../constants/initialData';
import browser from 'webextension-polyfill';

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
