/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api__docs_warehouses__schemas__Item } from './api__docs_warehouses__schemas__Item';

export type api__docs_warehouses__schemas__Create = {
  number?: string;
  dated?: number;
  contragent?: number;
  docs_purchases?: number;
  operation?: string;
  to_warehouse?: number;
  status?: boolean;
  comment?: string;
  warehouse?: number;
  organization?: number;
  goods?: Array<api__docs_warehouses__schemas__Item>;
  docs_sales_id?: number;
};
