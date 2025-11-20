/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DebitCreditType } from './DebitCreditType';

export type Article = {
  id: number;
  name: string;
  emoji?: string;
  icon_file?: string;
  code?: number;
  description?: string;
  expenses_for?: string;
  distribute_for?: string;
  distribute_according?: string;
  created_at: number;
  updated_at: number;
  dc?: DebitCreditType;
};
