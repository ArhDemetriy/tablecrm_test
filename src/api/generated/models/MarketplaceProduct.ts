/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailableWarehouse } from './AvailableWarehouse';

/**
 * Модель товара для маркетплейса
 */
export type MarketplaceProduct = {
  id: number;
  name: string;
  description_short?: string;
  description_long?: string;
  code?: string;
  unit_name?: string;
  cashbox_id: number;
  category_name?: string;
  manufacturer_name?: string;
  price: number;
  price_type: string;
  created_at: string;
  updated_at: string;
  images?: Array<string>;
  barcodes?: Array<string>;
  type?: string;
  distance?: number;
  listing_pos?: number;
  listing_page?: number;
  is_ad_pos?: boolean;
  tags?: Array<string>;
  variations?: Array<Record<string, any>>;
  current_amount?: number;
  seller_name?: string;
  seller_photo?: string;
  total_sold?: number;
  rating?: number;
  reviews_count?: number;
  available_warehouses?: Array<AvailableWarehouse>;
};
