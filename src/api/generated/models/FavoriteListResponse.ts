/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FavoriteResponse } from './FavoriteResponse';

/**
 * Список избранного
 */
export type FavoriteListResponse = {
  result: Array<FavoriteResponse>;
  count: number;
  page: number;
  size: number;
};
