/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DayStatusBreakdown } from './DayStatusBreakdown';

/**
 * Аналитика за один день
 */
export type DayAnalytics = {
  date: number;
  day_number: number;
  orders_created: number;
  orders_paid: number;
  revenue?: number;
  by_status: DayStatusBreakdown;
};
