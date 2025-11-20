/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmountModel } from './AmountModel';
import type { ConfirmationEmbedded } from './ConfirmationEmbedded';
import type { ConfirmationRedirect } from './ConfirmationRedirect';
import type { ConfirmationRedirectResponce } from './ConfirmationRedirectResponce';
import type { MethodBankCard } from './MethodBankCard';
import type { MethodSbp } from './MethodSbp';
import type { ReceiptModelView } from './ReceiptModelView';

export type PaymentCreateModelView = {
  amount?: AmountModel;
  description?: string;
  receipt?: ReceiptModelView;
  tax_system_code?: number;
  capture?: boolean;
  merchant_customer_id?: string;
  payment_method_data?: MethodBankCard | MethodSbp;
  test?: boolean;
  confirmation?: ConfirmationRedirect | ConfirmationEmbedded | ConfirmationRedirectResponce;
};
