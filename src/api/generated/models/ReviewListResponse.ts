/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MarketplaceReview } from './MarketplaceReview';

/**
 * Список отзывов
 */
export type ReviewListResponse = {
  result: Array<MarketplaceReview>;
  count: number;
  page: number;
  size: number;
  avg_rating?: number;
};
