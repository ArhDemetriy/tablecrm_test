/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SaleOperations } from './SaleOperations';
import type { Settings } from './Settings';
import type { api__docs_sales__schemas__Item } from './api__docs_sales__schemas__Item';

export type api__docs_sales__schemas__Create = {
  number?: string;
  dated?: number;
  operation?: SaleOperations;
  tags?: string;
  parent_docs_sales?: number;
  comment?: string;
  client?: number;
  contragent?: number;
  contract?: number;
  organization: number;
  loyality_card_id?: number;
  warehouse?: number;
  paybox?: number;
  tax_included?: boolean;
  tax_active?: boolean;
  settings?: Settings;
  sales_manager?: number;
  paid_rubles?: number;
  paid_lt?: number;
  status?: boolean;
  tech_card_operation_uuid?: string;
  goods?: Array<api__docs_sales__schemas__Item>;
  priority?: number;
  is_marketplace_order?: boolean;
};
