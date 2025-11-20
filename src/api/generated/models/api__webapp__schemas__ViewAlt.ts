/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Warehouse } from './Warehouse';

export type api__webapp__schemas__ViewAlt = {
  organization_id?: number;
  organization_name?: string;
  current_amount: number;
  plus_amount: number;
  minus_amount: number;
  start_ost: number;
  now_ost: number;
  warehouses?: Array<Warehouse>;
};
