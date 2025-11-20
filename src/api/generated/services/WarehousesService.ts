/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Warehouse } from '../models/Warehouse';
import type { WarehouseCreateMass } from '../models/WarehouseCreateMass';
import type { WarehouseEdit } from '../models/WarehouseEdit';
import type { WarehouseList } from '../models/WarehouseList';
import type { WarehouseListGet } from '../models/WarehouseListGet';

export class WarehousesService {
  /**
   * Get Warehouse By Id
   * Получение склада по ID
   * @returns Warehouse Successful Response
   * @throws ApiError
   */
  public static getWarehouseByIdWarehousesIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Warehouse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/warehouses/{idx}/',
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
   * Delete Warehouse
   * Удаление склада
   * @returns Warehouse Successful Response
   * @throws ApiError
   */
  public static deleteWarehouseWarehousesIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Warehouse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/warehouses/{idx}/',
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
   * Edit Warehouse
   * Редактирование склада
   * @returns Warehouse Successful Response
   * @throws ApiError
   */
  public static editWarehouseWarehousesIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: WarehouseEdit;
  }): CancelablePromise<Warehouse> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/warehouses/{idx}/',
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
   * Get Warehouses
   * Получение списка складов
   * @returns WarehouseListGet Successful Response
   * @throws ApiError
   */
  public static getWarehousesWarehousesGet({
    token,
    name,
    limit = 100,
    offset,
  }: {
    token: string;
    name?: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<WarehouseListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/warehouses/',
      query: {
        token: token,
        name: name,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * New Warehouse
   * Создание склада
   * @returns WarehouseList Successful Response
   * @throws ApiError
   */
  public static newWarehouseWarehousesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: WarehouseCreateMass;
  }): CancelablePromise<WarehouseList> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/warehouses/',
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
