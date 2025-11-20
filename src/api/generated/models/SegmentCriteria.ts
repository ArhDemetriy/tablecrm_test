/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { DeliverySchema } from './DeliverySchema';
import type { LoyalityCriteria } from './LoyalityCriteria';
import type { OrderCriteriaSchema } from './OrderCriteriaSchema';
import type { PickerCourierSchema } from './PickerCourierSchema';
import type { PurchaseCriteria } from './PurchaseCriteria';

export type SegmentCriteria = {
  purchases?: PurchaseCriteria;
  loyality?: LoyalityCriteria;
  tags?: Array<string>;
  docs_sales_tags?: Array<string>;
  delivery_required?: boolean;
  created_at?: DateRange;
  picker?: PickerCourierSchema;
  courier?: PickerCourierSchema;
  delivery_info?: DeliverySchema;
  orders?: OrderCriteriaSchema;
};
