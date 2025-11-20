/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostType } from './CostType';

export type ShowIntegration = {
  id: number;
  status: boolean;
  name: string;
  image: string;
  images: Array<string>;
  description_short: string;
  description_long: string;
  folder_name: string;
  microservice_id: number;
  owner: number;
  is_public: number;
  cost: number;
  cost_type: CostType;
  cost_percent: number;
  payed_to?: string;
  is_payed?: boolean;
  trial?: string;
};
