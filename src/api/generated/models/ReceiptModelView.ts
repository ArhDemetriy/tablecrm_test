/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerModel } from './CustomerModel';
import type { ItemModelView } from './ItemModelView';

export type ReceiptModelView = {
  customer?: CustomerModel;
  items: Array<ItemModelView>;
};
