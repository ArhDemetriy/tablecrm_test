import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createDocSale, getDocsSales } from './docsSales';

export function useDocsSales() {
  return useQuery({
    queryKey: ['docs-sales'],
    queryFn: getDocsSales,
  });
}

export function useCreateDocSale() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createDocSale,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['docs-sales'] });
    },
  });
}
