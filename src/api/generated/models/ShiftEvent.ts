/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShiftStatus } from './ShiftStatus';

export type ShiftEvent = {
  first_name: string;
  last_name?: string;
  username?: string;
  photo: string;
  relation_id?: number;
  phone_number?: string;
  shift_status: ShiftStatus;
  event_start: string;
};
