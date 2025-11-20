import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { token } from './const';
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

export function useDocsSales() {
  return useQuery({
    queryKey: ['docs-sales'],
    queryFn: () => DocsSalesService.getListDocsSalesGet({ token }),
  });
}

export function useCreateDocSale() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: api__docs_sales__schemas__CreateMass) =>
      DocsSalesService.callDocsSalesPost({ token, requestBody: data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['docs-sales'] });
    },
  });
}

// Клиенты
export function useContragents() {
  return useQuery({
    queryKey: ['contragents'],
    queryFn: () => ContragentsService.readContragentsMetaContragentsGet({ token }),
  });
}

// Склады
export function useWarehouses() {
  return useQuery({
    queryKey: ['warehouses'],
    queryFn: () => WarehousesService.getWarehousesWarehousesGet({ token }),
  });
}

// Счета
export function usePayboxes() {
  return useQuery({
    queryKey: ['payboxes'],
    queryFn: () => PboxesService.readPayboxesMetaPayboxesGet({ token }),
  });
}

// Организации
export function useOrganizations() {
  return useQuery({
    queryKey: ['organizations'],
    queryFn: () => OrganizationsService.getOrganizationsOrganizationsGet({ token }),
  });
}

// Типы цен
export function usePriceTypes() {
  return useQuery({
    queryKey: ['price-types'],
    queryFn: () => PriceTypesService.getPriceTypesPriceTypesGet({ token }),
  });
}

// Товары
export function useNomenclature() {
  return useQuery({
    queryKey: ['nomenclature'],
    queryFn: () => NomenclatureService.getNomenclatureNomenclatureGet({ token }),
  });
}

