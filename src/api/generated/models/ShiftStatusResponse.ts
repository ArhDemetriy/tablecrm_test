/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShiftResponse } from './ShiftResponse';
import type { ShiftStatus } from './ShiftStatus';

/**
 * Ответ с текущим статусом смены
 */
export type ShiftStatusResponse = {
  is_on_shift: boolean;
  status: ShiftStatus;
  current_shift?: ShiftResponse;
  message: string;
};
