/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryInfoSchema } from './DeliveryInfoSchema';
import type { MarketplaceOrderGood } from './MarketplaceOrderGood';

/**
 * Запрос на создание заказа маркетплейса
 */
export type MarketplaceOrderRequest = {
  goods: Array<MarketplaceOrderGood>;
  delivery: DeliveryInfoSchema;
  contragent_phone: string;
  client_lat?: number;
  client_lon?: number;
};
