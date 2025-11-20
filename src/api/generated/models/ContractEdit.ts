/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentTime } from './PaymentTime';
import type { api__contracts__schemas__PaymentType } from './api__contracts__schemas__PaymentType';

export type ContractEdit = {
  number?: string;
  name?: string;
  print_name?: string;
  dated?: number;
  used_from?: number;
  used_to?: number;
  status?: boolean;
  contragent?: number;
  organization?: number;
  payment_type?: api__contracts__schemas__PaymentType;
  payment_time?: PaymentTime;
};
