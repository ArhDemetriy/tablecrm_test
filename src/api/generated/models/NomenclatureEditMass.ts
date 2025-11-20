/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NomenclatureCashbackType } from './NomenclatureCashbackType';
import type { NomenclatureType } from './NomenclatureType';

export type NomenclatureEditMass = {
  name?: string;
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
};
