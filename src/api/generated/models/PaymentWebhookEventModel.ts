/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventWebhookPayment } from './EventWebhookPayment';
import type { PaymentBaseModel } from './PaymentBaseModel';

export type PaymentWebhookEventModel = {
  type: string;
  event: EventWebhookPayment;
  object: PaymentBaseModel;
};
