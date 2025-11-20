/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TechOperationComponentQuantities } from './TechOperationComponentQuantities';
import type { api__tech_operations__schemas__TechCardStatus } from './api__tech_operations__schemas__TechCardStatus';

export type TechOperation = {
  tech_card_id: string;
  output_quantity: number;
  from_warehouse_id: number;
  to_warehouse_id: number;
  nomenclature_id: number;
  component_quantities: Array<TechOperationComponentQuantities>;
  payment_ids?: Array<string>;
  id: string;
  user_id: number;
  created_at: string;
  status: api__tech_operations__schemas__TechCardStatus;
  production_order_id: string;
  consumption_order_id: string;
};
