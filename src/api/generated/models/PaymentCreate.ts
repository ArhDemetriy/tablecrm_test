/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentRepeat } from './PaymentRepeat';
import type { api__payments__schemas__PaymentType } from './api__payments__schemas__PaymentType';

export type PaymentCreate = {
  contragent?: number;
  type: api__payments__schemas__PaymentType;
  name?: string;
  external_id?: string;
  tags?: string;
  amount_without_tax: number;
  article?: string;
  article_id?: number;
  project_id?: number;
  amount: number;
  description?: string;
  paybox: number;
  paybox_to?: number;
  date?: number;
  repeat_freq?: number;
  repeat?: PaymentRepeat;
  status: boolean;
  stopped: boolean;
  tax?: number;
  tax_type?: string;
  deb_cred?: boolean;
  cheque?: number;
  docs_sales_id?: number;
  docs_purchases_id?: number;
  contract_id?: number;
  preamount?: number;
  percentamount?: number;
};
