/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Modulo } from './Modulo';
import type { TimeRange } from './TimeRange';

export type TgNotificationsConditions = {
  time_range?: TimeRange;
  weekdays?: Array<number>;
  month_days?: Array<number>;
  month_day_modulo?: Modulo;
};
