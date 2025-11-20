/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryInfoSchema } from './DeliveryInfoSchema';
import type { OrderStatus } from './OrderStatus';
import type { Settings } from './Settings';
import type { UserShort } from './UserShort';
import type { api__docs_sales__schemas__Item } from './api__docs_sales__schemas__Item';

export type api__docs_sales__schemas__ViewInList = {
  id: number;
  number?: string;
  dated?: number;
  operation?: string;
  tags?: string;
  docs_sales?: number;
  nomenclature_count?: number;
  paid_doc?: number;
  paid_rubles?: number;
  paid_loyality?: number;
  status?: boolean;
  doc_discount?: number;
  comment?: string;
  client?: number;
  contragent?: number;
  contragent_segments?: Array<number>;
  contragent_name?: string;
  contract?: number;
  organization?: number;
  warehouse?: number;
  autorepeat?: boolean;
  settings?: Settings;
  sum?: number;
  tax_included?: boolean;
  tax_active?: boolean;
  sales_manager?: number;
  goods?: Array<api__docs_sales__schemas__Item>;
  delivery_info?: DeliveryInfoSchema;
  updated_at: number;
  created_at: number;
  has_contragent?: boolean;
  has_loyality_card?: boolean;
  color_status?: string;
  priority?: number;
  order_status?: OrderStatus;
  assigned_picker?: number | UserShort;
  assigned_courier?: number | UserShort;
  picker_started_at?: string;
  picker_finished_at?: string;
  courier_picked_at?: string;
  courier_delivered_at?: string;
};
