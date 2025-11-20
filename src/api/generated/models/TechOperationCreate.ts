/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TechOperationComponentQuantities } from './TechOperationComponentQuantities';

export type TechOperationCreate = {
  tech_card_id: string;
  output_quantity: number;
  from_warehouse_id: number;
  to_warehouse_id: number;
  nomenclature_id: number;
  component_quantities: Array<TechOperationComponentQuantities>;
  payment_ids?: Array<string>;
};
