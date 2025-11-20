/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Unit } from '../models/Unit';
import type { UnitListGet } from '../models/UnitListGet';

export class UnitsService {
  /**
   * Get Available Units
   * Получение списка доступных единиц измерения
   * @returns UnitListGet Successful Response
   * @throws ApiError
   */
  public static getAvailableUnitsUnitsGet({
    limit = 100,
    offset,
  }: {
    limit?: number;
    offset?: number;
  }): CancelablePromise<UnitListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/units/',
      query: {
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Unit
   * Получение единицы измерения
   * @returns Unit Successful Response
   * @throws ApiError
   */
  public static getUnitUnitsIdxGet({ idx }: { idx: number }): CancelablePromise<Unit> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/units/{idx}/',
      path: {
        idx: idx,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
