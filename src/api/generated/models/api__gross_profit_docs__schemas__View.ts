/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api__gross_profit_docs__schemas__Item } from './api__gross_profit_docs__schemas__Item';

export type api__gross_profit_docs__schemas__View = {
  id: number;
  organization: number;
  period_start: number;
  period_end: number;
  updated_at: number;
  created_at: number;
  table?: Array<api__gross_profit_docs__schemas__Item>;
};
