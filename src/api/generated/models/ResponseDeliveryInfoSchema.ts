/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api__docs_sales__schemas__RecipientInfoSchema } from './api__docs_sales__schemas__RecipientInfoSchema';

export type ResponseDeliveryInfoSchema = {
  address?: string;
  delivery_date?: number;
  delivery_price?: number;
  recipient?: api__docs_sales__schemas__RecipientInfoSchema;
  note?: string;
  id: number;
  docs_sales_id: number;
};
