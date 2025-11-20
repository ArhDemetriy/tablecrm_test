/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { api__gross_profit_docs__schemas__ListView } from '../models/api__gross_profit_docs__schemas__ListView';
import type { api__gross_profit_docs__schemas__ListViewGet } from '../models/api__gross_profit_docs__schemas__ListViewGet';
import type { api__gross_profit_docs__schemas__View } from '../models/api__gross_profit_docs__schemas__View';

export class GrossProfitDocsService {
  /**
   * Get By Id
   * Получение документа по ID
   * @returns api__gross_profit_docs__schemas__View Successful Response
   * @throws ApiError
   */
  public static getByIdGrossProfitDocsIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<api__gross_profit_docs__schemas__View> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/gross_profit_docs/{idx}/',
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
   * Delete
   * Удаление документов
   * @returns api__gross_profit_docs__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static deleteGrossProfitDocsIdxDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<api__gross_profit_docs__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/gross_profit_docs/{idx}/',
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
   * Get List
   * Получение списка документов
   * @returns api__gross_profit_docs__schemas__ListViewGet Successful Response
   * @throws ApiError
   */
  public static getListGrossProfitDocsGet({
    token,
    limit = 100,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<api__gross_profit_docs__schemas__ListViewGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/gross_profit_docs/',
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
}
