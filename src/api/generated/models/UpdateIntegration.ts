/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostType } from './CostType';

export type UpdateIntegration = {
  status?: boolean;
  name?: string;
  description_short?: string;
  description_long?: string;
  folder_name?: string;
  microservice_id?: number;
  is_public?: number;
  cost?: number;
  cost_type?: CostType;
  cost_percent?: number;
  payed_to?: string;
  trial?: string;
};
