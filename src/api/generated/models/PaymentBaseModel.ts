/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmountModel } from './AmountModel';
import type { ConfirmationEmbedded } from './ConfirmationEmbedded';
import type { ConfirmationRedirect } from './ConfirmationRedirect';
import type { ConfirmationRedirectResponce } from './ConfirmationRedirectResponce';
import type { InvoiceDetails } from './InvoiceDetails';
import type { MethodBankCard } from './MethodBankCard';
import type { MethodSbp } from './MethodSbp';
import type { ReceiptModel } from './ReceiptModel';
import type { RecipientModel } from './RecipientModel';

export type PaymentBaseModel = {
  amount?: AmountModel;
  description?: string;
  receipt?: ReceiptModel;
  tax_system_code?: number;
  capture?: boolean;
  merchant_customer_id?: string;
  payment_method_data?: MethodBankCard | MethodSbp;
  test?: boolean;
  confirmation?: ConfirmationRedirect | ConfirmationEmbedded | ConfirmationRedirectResponce;
  id?: string;
  status?: string;
  income_amount?: AmountModel;
  recipient?: RecipientModel;
  captured_at?: string;
  created_at?: string;
  expires_at?: string;
  refundable?: boolean;
  receipt_registration?: string;
  invoice_details?: InvoiceDetails;
  payment_crm_id?: number;
};
