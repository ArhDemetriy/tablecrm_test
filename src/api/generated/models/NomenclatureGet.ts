/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NomenclatureAttributeValue } from './NomenclatureAttributeValue';
import type { NomenclatureCashbackType } from './NomenclatureCashbackType';
import type { NomenclatureType } from './NomenclatureType';
import type { PriceGetWithNomenclature } from './PriceGetWithNomenclature';
import type { WarehouseWithNomenclature } from './WarehouseWithNomenclature';

export type NomenclatureGet = {
  name: string;
  type?: NomenclatureType;
  description_short?: string;
  description_long?: string;
  code?: string;
  unit?: number;
  category?: number;
  manufacturer?: number;
  chatting_percent?: number;
  cashback_type?: NomenclatureCashbackType;
  cashback_value?: number;
  external_id?: string;
  tags?: Array<string>;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: Array<string>;
  id: number;
  unit_name?: string;
  barcodes?: Array<string>;
  prices?: Array<PriceGetWithNomenclature>;
  balances?: Array<WarehouseWithNomenclature>;
  attributes?: Array<NomenclatureAttributeValue>;
  photos?: Array<Record<string, any>>;
  group_id?: number;
  group_name?: string;
  is_main?: boolean;
  updated_at: number;
  created_at: number;
};
