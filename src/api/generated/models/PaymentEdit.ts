/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentRepeat } from './PaymentRepeat';
import type { api__payments__schemas__PaymentType } from './api__payments__schemas__PaymentType';

export type PaymentEdit = {
  type?: api__payments__schemas__PaymentType;
  name?: string;
  tags?: string;
  external_id?: string;
  article?: string;
  article_id?: number;
  project_id?: number;
  description?: string;
  repeat_freq?: number;
  repeat?: PaymentRepeat;
  tax_type?: string;
  paybox?: number;
  paybox_to?: number;
  contragent?: number;
  amount?: number;
  amount_without_tax?: number;
  date?: number;
  status?: boolean;
  stopped?: boolean;
  tax?: number;
  deb_cred?: boolean;
  cheque?: number;
  docs_sales_id?: number;
  docs_purchases_id?: number;
};
