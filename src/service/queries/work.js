import { useQuery } from '@tanstack/react-query';
import { getWorkList, getWork, getWorkFeedbacks } from '@/service/api/work';
import { workKey } from '@/variables/queryKeys';

export function useGetWorkList(id) {
  return useQuery({
    queryKey: ['worksList'],
    queryFn: () => getWorkList(id),
    enabled: !!id,
  });
}

export function useGetWork(id) {
  return useQuery({
    queryKey: workKey.detail(),
    queryFn: () => getWork(id),
    enabled: !!id,
  });
}

export function useGeWorkFeedbacks(id) {
  return useQuery({
    queryKey: workKey.feedbacks(),
    queryFn: () => getWorkFeedbacks(id),
    enabled: !!id,
  });
}
