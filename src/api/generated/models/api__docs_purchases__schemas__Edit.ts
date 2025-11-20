/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api__docs_purchases__schemas__Item } from './api__docs_purchases__schemas__Item';

export type api__docs_purchases__schemas__Edit = {
  number?: string;
  dated?: number;
  operation?: string;
  comment?: string;
  client?: number;
  contragent?: number;
  contract?: number;
  status?: boolean;
  organization: number;
  warehouse?: number;
  purchased_by?: number;
  docs_sales_id?: number;
  goods?: Array<api__docs_purchases__schemas__Item>;
  id: number;
};
