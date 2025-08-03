import { queryOptions } from '@tanstack/react-query';
import { getUser } from '../api';
import JsCookie from '@/shared/utils/cookies';

export const userOptions = () => {
  const accessToken = JsCookie.get('accessToken');

  return queryOptions({
    queryKey: ['user', 'me'], // key를 좀 더 명확하게
    queryFn: getUser,
    enabled: !!accessToken,
    // retry: 1,
  });
};
