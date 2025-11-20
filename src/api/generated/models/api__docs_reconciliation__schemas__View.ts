/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type api__docs_reconciliation__schemas__View = {
  id: number;
  number?: string;
  dated?: number;
  organization: number;
  contragent: number;
  contract?: number;
  organization_name: string;
  contragent_name: string;
  period_from?: number;
  period_to?: number;
  organization_period_debt?: number;
  organization_period_credit?: number;
  contragent_period_debt?: number;
  contragent_period_credit?: number;
  organization_initial_balance?: number;
  contragent_initial_balance?: number;
  organization_closing_balance?: number;
  contragent_closing_balance?: number;
  updated_at: number;
  created_at: number;
  documents?: Array<Record<string, any>>;
  documents_grouped?: Record<string, Array<Record<string, any>>>;
};
