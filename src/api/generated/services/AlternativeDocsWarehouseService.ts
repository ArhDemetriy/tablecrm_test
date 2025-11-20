/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { api__docs_warehouses__schemas__CreateMass } from '../models/api__docs_warehouses__schemas__CreateMass';
import type { api__docs_warehouses__schemas__EditMass } from '../models/api__docs_warehouses__schemas__EditMass';
import type { api__docs_warehouses__schemas__ListView } from '../models/api__docs_warehouses__schemas__ListView';

export class AlternativeDocsWarehouseService {
  /**
   * Create
   * Создание документов движения товарных остатков
   * operation:
   * incoming Приходных (Увеличивает количество товара на складе)
   * outgoing Расходных (Уменьшает количество товара на складе)
   * transfer Переводных документов (Уменьшает на одном складе увеличивает на другом)
   * @returns api__docs_warehouses__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static createAltDocsWarehousePost({
    token,
    requestBody,
    holding = false,
  }: {
    token: string;
    requestBody: api__docs_warehouses__schemas__CreateMass;
    holding?: boolean;
  }): CancelablePromise<api__docs_warehouses__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/alt_docs_warehouse/',
      query: {
        token: token,
        holding: holding,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update
   * Обновление
   * @returns api__docs_warehouses__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static updateAltDocsWarehousePatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: api__docs_warehouses__schemas__EditMass;
  }): CancelablePromise<api__docs_warehouses__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/alt_docs_warehouse/',
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
