/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { GetDocsWarehouse } from '../models/GetDocsWarehouse';
import type { api__docs_warehouses__schemas__CreateMass } from '../models/api__docs_warehouses__schemas__CreateMass';
import type { api__docs_warehouses__schemas__EditMass } from '../models/api__docs_warehouses__schemas__EditMass';
import type { api__docs_warehouses__schemas__ListView } from '../models/api__docs_warehouses__schemas__ListView';
import type { api__docs_warehouses__schemas__View } from '../models/api__docs_warehouses__schemas__View';

export class DocsWarehouseService {
  /**
   * Get By Id
   * Получение документа по ID
   * @returns api__docs_warehouses__schemas__View Successful Response
   * @throws ApiError
   */
  public static getByIdDocsWarehouseIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<api__docs_warehouses__schemas__View> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_warehouse/{idx}/',
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
   * Get List
   * Получение списка документов
   * @returns GetDocsWarehouse Successful Response
   * @throws ApiError
   */
  public static getListDocsWarehouseGet({
    token,
    warehouseId,
    operation = '',
    showGoods = false,
    limit = 10,
    offset,
    datefrom,
    dateto,
    tags,
  }: {
    token: string;
    warehouseId?: number;
    operation?: string;
    showGoods?: boolean;
    limit?: number;
    offset?: number;
    datefrom?: number;
    dateto?: number;
    tags?: string;
  }): CancelablePromise<GetDocsWarehouse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_warehouse/',
      query: {
        token: token,
        warehouse_id: warehouseId,
        operation: operation,
        show_goods: showGoods,
        limit: limit,
        offset: offset,
        datefrom: datefrom,
        dateto: dateto,
        tags: tags,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create
   * Создание документов
   * @returns api__docs_warehouses__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static createDocsWarehousePost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: api__docs_warehouses__schemas__CreateMass;
  }): CancelablePromise<api__docs_warehouses__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/docs_warehouse/',
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
   * Delete
   * Удаление документов
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteDocsWarehouseDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/docs_warehouse/',
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
   * Update
   * Редактирование документов
   * @returns api__docs_warehouses__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static updateDocsWarehousePatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: api__docs_warehouses__schemas__EditMass;
  }): CancelablePromise<api__docs_warehouses__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/docs_warehouse/',
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
  /**
   * Delete Docs Warehouse Route
   * Удаление документа
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteDocsWarehouseRouteDocsWarehouseIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/docs_warehouse/{idx}',
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
}
