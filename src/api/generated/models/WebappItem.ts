/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Picture } from './Picture';
import type { api__webapp__schemas__PriceInList } from './api__webapp__schemas__PriceInList';
import type { api__webapp__schemas__ViewAltList } from './api__webapp__schemas__ViewAltList';

export type WebappItem = {
  id: number;
  name: string;
  type?: string;
  description_short?: string;
  description_long?: string;
  code?: number;
  unit?: number;
  category?: number;
  manufacturer?: number;
  updated_at: number;
  created_at: number;
  unit_name?: string;
  pictures?: Array<Picture>;
  prices?: Array<api__webapp__schemas__PriceInList>;
  alt_warehouse_balances?: Array<api__webapp__schemas__ViewAltList>;
};
