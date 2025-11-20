/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentRepeat } from './PaymentRepeat';

export type PaymentInListWithData = {
  id: number;
  contragent?: number;
  type: string;
  name?: string;
  external_id?: string;
  tags?: string;
  amount_without_tax?: number;
  article?: string;
  article_id?: number;
  project_id?: number;
  amount?: number;
  description?: string;
  paybox: number;
  paybox_to?: number;
  source_account_name?: string;
  source_account_id?: number;
  date?: number;
  repeat_freq?: number;
  repeat?: PaymentRepeat;
  status: boolean;
  stopped: boolean;
  tax?: number;
  tax_type?: string;
  deb_cred?: boolean;
  raspilen?: boolean;
  parent_id?: number;
  contragent_name?: string;
  cheque?: number;
  docs_sales_id?: number;
  docs_purchases_id?: number;
  created_at: number;
  updated_at: number;
  can_be_deleted_or_edited?: boolean;
  data: Record<string, any>;
};
