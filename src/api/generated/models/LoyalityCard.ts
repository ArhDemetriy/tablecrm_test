/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LoyalityCard = {
  card_number?: string;
  tags?: string;
  phone_number?: string;
  contragent_id?: number;
  contragent_name?: string;
  organization_id?: number;
  cashback_percent?: number;
  minimal_checque_amount?: number;
  max_withdraw_percentage?: number;
  start_period?: number;
  end_period?: number;
  max_percentage?: number;
  lifetime?: number;
  status_card?: boolean;
  is_deleted?: boolean;
  apple_wallet_advertisement?: string;
  id: number;
  created_at: number;
  updated_at: number;
  data: Record<string, any>;
};
