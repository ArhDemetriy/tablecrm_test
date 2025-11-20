/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Price = {
  id: number;
  nomenclature_id: number;
  nomenclature_name: string;
  type?: string;
  description_short?: string;
  description_long?: string;
  code?: string;
  unit?: number;
  unit_name?: string;
  category?: number;
  category_name?: string;
  manufacturer?: number;
  manufacturer_name?: string;
  price: number;
  price_type?: string;
  date_from?: number;
  date_to?: number;
  photos?: Array<Record<string, any>>;
  updated_at: number;
  created_at: number;
};
