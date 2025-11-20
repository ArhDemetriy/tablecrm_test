/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerModel } from './CustomerModel';
import type { ItemModel } from './ItemModel';

export type ReceiptModel = {
  customer?: CustomerModel;
  items: Array<ItemModel>;
};
