/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { Range } from './Range';

export type PurchaseCriteria = {
  total_amount?: Range;
  count?: Range;
  last_purchase_days_ago?: Range;
  amount_per_check?: Range;
  date_range?: DateRange;
  categories?: Array<string>;
  nomenclatures?: Array<string>;
  is_fully_paid?: boolean;
  count_of_goods?: Range;
};
