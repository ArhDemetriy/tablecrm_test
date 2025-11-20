/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LoyalityTransaction = {
  type?: string;
  dated?: number;
  amount?: number;
  loyality_card_number: string;
  tags?: string;
  name?: string;
  description?: string;
  status?: boolean;
  external_id?: string;
  cashier_name?: string;
  percentamount?: number;
  preamount?: number;
  dead_at?: number;
  is_deleted?: boolean;
  autoburned?: boolean;
  id: number;
  loyality_card_id: number;
  created_at: number;
  updated_at: number;
  data: Record<string, any>;
};
