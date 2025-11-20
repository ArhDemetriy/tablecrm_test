/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MarketplaceProduct } from './MarketplaceProduct';

/**
 * Список товаров маркетплейса
 */
export type MarketplaceProductList = {
  result: Array<MarketplaceProduct>;
  count: number;
  page: number;
  size: number;
};
