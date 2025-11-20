/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { api__segments__schema_criteria__RecipientInfoSchema } from './api__segments__schema_criteria__RecipientInfoSchema';

export type DeliverySchema = {
  address?: string;
  delivery_date?: DateRange;
  note?: string;
  recipient?: api__segments__schema_criteria__RecipientInfoSchema;
};
