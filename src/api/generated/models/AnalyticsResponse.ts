/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnalyticsFilter } from './AnalyticsFilter';
import type { AnalyticsPeriod } from './AnalyticsPeriod';
import type { AnalyticsSummary } from './AnalyticsSummary';
import type { DayAnalytics } from './DayAnalytics';

/**
 * Ответ с детальной аналитикой по дням
 */
export type AnalyticsResponse = {
  period: AnalyticsPeriod;
  filter: AnalyticsFilter;
  summary: AnalyticsSummary;
  days: Array<DayAnalytics>;
};
