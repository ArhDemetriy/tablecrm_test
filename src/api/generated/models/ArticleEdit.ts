/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DebitCreditType } from './DebitCreditType';
import type { DistributeAccording } from './DistributeAccording';
import type { DistributeFor } from './DistributeFor';
import type { ExpensesFor } from './ExpensesFor';

export type ArticleEdit = {
  id: number;
  name?: string;
  emoji?: string;
  icon_file?: string;
  code?: number;
  description?: string;
  expenses_for?: ExpensesFor;
  distribute_for?: DistributeFor;
  distribute_according?: DistributeAccording;
  dc?: DebitCreditType;
};
