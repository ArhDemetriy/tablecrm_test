/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Разбор заказов по статусам за день
 */
export type DayStatusBreakdown = {
  received?: number;
  processed?: number;
  collecting?: number;
  collected?: number;
  picked?: number;
  delivered?: number;
  closed?: number;
  success?: number;
};
