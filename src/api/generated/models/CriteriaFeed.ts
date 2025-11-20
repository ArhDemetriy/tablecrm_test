/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PricesFeed } from './PricesFeed';

export type CriteriaFeed = {
  warehouse_id?: Array<number>;
  only_on_stock?: boolean;
  prices?: PricesFeed;
  category_id?: Array<number>;
  price_types_id?: number;
};
