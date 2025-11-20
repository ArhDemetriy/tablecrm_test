/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingStatus } from './BookingStatus';
import type { DocSalesStatus } from './DocSalesStatus';
import type { NomenclatureBookingEditView } from './NomenclatureBookingEditView';

export type BookingEditGoods = {
  title?: string;
  contragent?: number;
  contragent_accept?: number;
  address?: string;
  date_booking?: number;
  start_booking?: number;
  end_booking?: number;
  booking_user_id?: number;
  booking_driver_id?: number;
  docs_sales_id?: number;
  status_doc_sales?: DocSalesStatus;
  status_booking?: BookingStatus;
  comment?: string;
  is_deleted?: boolean;
  sale_payload?: Record<string, any>;
  id?: number;
  goods?: Array<NomenclatureBookingEditView>;
};
