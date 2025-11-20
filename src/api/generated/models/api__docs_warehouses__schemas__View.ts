/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api__docs_warehouses__schemas__ItemGet } from './api__docs_warehouses__schemas__ItemGet';

export type api__docs_warehouses__schemas__View = {
  id: number;
  tags?: string;
  number?: string;
  dated?: number;
  contragent?: number;
  operation?: string;
  comment?: string;
  organization: number;
  status?: boolean;
  warehouse?: number;
  to_warehouse?: number;
  sum?: number;
  updated_at: number;
  created_at: number;
  goods?: Array<api__docs_warehouses__schemas__ItemGet>;
};
