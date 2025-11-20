/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostType } from './CostType';

export type CreateApp = {
  status: boolean;
  name: string;
  description_short: string;
  description_long: string;
  folder_name: string;
  microservice_id: number;
  is_public: number;
  cost: number;
  cost_type: CostType;
  cost_percent: number;
  scopes: string;
  client_app_id?: string;
  url: string;
  redirect_uri?: string;
};
