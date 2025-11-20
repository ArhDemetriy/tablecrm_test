/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingEventStatus } from './BookingEventStatus';

export type CreateBookingEventModel = {
  booking_nomenclature_id: number;
  type: BookingEventStatus;
  value?: string;
  latitude: string;
  longitude: string;
};
