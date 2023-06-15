import { useQuery } from '@tanstack/react-query';
import { getContribution } from '../api/github';
import { QUERY_KEYS } from '../constants/queryKeys';
import { contributesInitialData } from '../constants/initialData';

export const useFetchContributes = (userId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.CONTRIBUTES, userId],
    queryFn: async () => {
      return await getContribution(userId);
    },
    initialData: contributesInitialData,
  });
};
