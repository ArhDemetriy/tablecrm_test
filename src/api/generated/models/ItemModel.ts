/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmountModel } from './AmountModel';
import type { MarkQuantityModel } from './MarkQuantityModel';

export type ItemModel = {
  description: string;
  amount: AmountModel;
  vat_code: number;
  quantity: number;
  measure?: string;
  mark_quantity?: MarkQuantityModel;
  payment_subject?: string;
  payment_mode?: string;
};
