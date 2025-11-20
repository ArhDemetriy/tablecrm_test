/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShiftStatus } from './ShiftStatus';

/**
 * Ответ с информацией о смене
 */
export type ShiftResponse = {
  id: number;
  user_id: number;
  cashbox_id: number;
  shift_start: string;
  shift_end?: string;
  status: ShiftStatus;
  break_start?: string;
  break_duration?: number;
  created_at: string;
  updated_at: string;
};
