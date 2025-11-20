/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PriceType } from './PriceType';

export type api__webapp__schemas__PriceInList = {
  id: number;
  unit_name?: string;
  category_name?: string;
  manufacturer_name?: string;
  price: number;
  date_from?: number;
  date_to?: number;
  price_types?: Array<PriceType>;
};
