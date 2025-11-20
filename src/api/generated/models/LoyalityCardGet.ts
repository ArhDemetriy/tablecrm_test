/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LoyalityCardGet = {
  id: number;
  card_number: number;
  tags?: string;
  balance: number;
  income: number;
  outcome: number;
  contragent_id: number;
  organization_id: number;
  contragent: string;
  organization: string;
  cashback_percent: number;
  minimal_checque_amount: number;
  max_withdraw_percentage: number;
  start_period: number;
  end_period: number;
  max_percentage: number;
  lifetime?: number;
  apple_wallet_advertisement: string;
  status_card: boolean;
  is_deleted: boolean;
  created_at: number;
  updated_at: number;
};
