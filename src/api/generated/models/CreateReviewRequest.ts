/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReviewEntityTypes } from './ReviewEntityTypes';

/**
 * Запрос на создание отзыва
 */
export type CreateReviewRequest = {
  entity_type: ReviewEntityTypes;
  entity_id: number;
  rating: number;
  text: string;
  contragent_phone: string;
};
