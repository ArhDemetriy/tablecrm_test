/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReviewEntityTypes } from './ReviewEntityTypes';

/**
 * Ответ с отзывом
 */
export type MarketplaceReview = {
  id: number;
  entity_type: ReviewEntityTypes;
  entity_id: number;
  rating: number;
  text: string;
  status: string;
  created_at: string;
  updated_at: string;
};
