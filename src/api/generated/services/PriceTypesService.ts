/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { PriceType } from '../models/PriceType';
import type { PriceTypeCreate } from '../models/PriceTypeCreate';
import type { PriceTypeEdit } from '../models/PriceTypeEdit';
import type { PriceTypeListGet } from '../models/PriceTypeListGet';

export class PriceTypesService {
  /**
   * Get Price Type By Id
   * Получение типа цен по ID
   * @returns PriceType Successful Response
   * @throws ApiError
   */
  public static getPriceTypeByIdPriceTypesIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<PriceType> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/price_types/{idx}/',
      path: {
        idx: idx,
      },
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Delete Price Type
   * Удаление типа цен
   * @returns PriceType Successful Response
   * @throws ApiError
   */
  public static deletePriceTypePriceTypesIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<PriceType> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/price_types/{idx}/',
      path: {
        idx: idx,
      },
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Edit Price Type
   * Редактирование типа цен
   * @returns PriceType Successful Response
   * @throws ApiError
   */
  public static editPriceTypePriceTypesIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: PriceTypeEdit;
  }): CancelablePromise<PriceType> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/price_types/{idx}/',
      path: {
        idx: idx,
      },
      query: {
        token: token,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Price Types
   * Получение списка типов цен
   * @returns PriceTypeListGet Successful Response
   * @throws ApiError
   */
  public static getPriceTypesPriceTypesGet({
    token,
    limit = 100,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<PriceTypeListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/price_types/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * New Price Type
   * Создание типа цен
   * @returns PriceType Successful Response
   * @throws ApiError
   */
  public static newPriceTypePriceTypesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: PriceTypeCreate;
  }): CancelablePromise<PriceType> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/price_types/',
      query: {
        token: token,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
