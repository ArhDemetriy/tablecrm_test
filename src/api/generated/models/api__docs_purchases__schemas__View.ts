/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api__docs_purchases__schemas__ItemGet } from './api__docs_purchases__schemas__ItemGet';

export type api__docs_purchases__schemas__View = {
  id: number;
  number?: string;
  dated?: number;
  status: boolean;
  operation?: string;
  comment?: string;
  client?: number;
  contragent?: number;
  contract?: number;
  organization: number;
  warehouse?: number;
  sum?: number;
  purchased_by?: number;
  docs_sales_id?: number;
  updated_at: number;
  created_at: number;
  goods?: Array<api__docs_purchases__schemas__ItemGet>;
};
