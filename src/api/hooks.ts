import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  ContragentsService,
  DocsSalesService,
  NomenclatureService,
  OrganizationsService,
  PboxesService,
  PriceTypesService,
  WarehousesService,
  type api__docs_sales__schemas__CreateMass,
} from './generated';

export function useDocsSales(token: string) {
  return useQuery({
    queryKey: ['docs-sales', token],
    queryFn: () => DocsSalesService.getListDocsSalesGet({ token }),
    enabled: !!token,
  });
}

export function useCreateDocSale(token: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: api__docs_sales__schemas__CreateMass) =>
      DocsSalesService.callDocsSalesPost({ token, requestBody: data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['docs-sales', token] });
    },
  });
}

// Клиенты
export function useContragents(
  token: string,
  options?: Omit<Parameters<typeof ContragentsService.readContragentsMetaContragentsGet>[0], 'token'>
) {
  return useQuery({
    queryKey: ['contragents', token, options],
    queryFn: () => ContragentsService.readContragentsMetaContragentsGet({ token, ...options }),
    enabled: !!token,
  });
}

// Склады
export function useWarehouses(token: string) {
  return useQuery({
    queryKey: ['warehouses', token],
    queryFn: () => WarehousesService.getWarehousesWarehousesGet({ token }),
    enabled: !!token,
  });
}

// Счета
export function usePayboxes(token: string) {
  return useQuery({
    queryKey: ['payboxes', token],
    queryFn: () => PboxesService.readPayboxesMetaPayboxesGet({ token }),
    enabled: !!token,
  });
}

// Организации
export function useOrganizations(token: string) {
  return useQuery({
    queryKey: ['organizations', token],
    queryFn: () => OrganizationsService.getOrganizationsOrganizationsGet({ token }),
    enabled: !!token,
  });
}

// Типы цен
export function usePriceTypes(token: string) {
  return useQuery({
    queryKey: ['price-types', token],
    queryFn: () => PriceTypesService.getPriceTypesPriceTypesGet({ token }),
    enabled: !!token,
  });
}

// Товары
export function useNomenclature(token: string) {
  return useQuery({
    queryKey: ['nomenclature', token],
    queryFn: () => NomenclatureService.getNomenclatureNomenclatureGet({ token }),
    enabled: !!token,
  });
}

