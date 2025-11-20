/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Page_View_ } from '../models/Page_View_';
import type { ViewRes } from '../models/ViewRes';

export class WarehouseBalancesService {
  /**
   * Clear Quantity
   * @returns any Successful Response
   * @throws ApiError
   */
  public static clearQuantityWarehouseBalancesClearQuantityCategoryIdCategoryGet({
    idCategory,
    token,
    warehouseId,
    dateFrom,
    dateTo,
  }: {
    idCategory: number;
    token: string;
    warehouseId: number;
    dateFrom?: number;
    dateTo?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/warehouse_balances/clearQuantity/category/{id_category}',
      path: {
        id_category: idCategory,
      },
      query: {
        token: token,
        warehouse_id: warehouseId,
        date_from: dateFrom,
        date_to: dateTo,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Clear Quantity
   * @returns any Successful Response
   * @throws ApiError
   */
  public static clearQuantityWarehouseBalancesClearQuantityProductIdProductGet({
    idProduct,
    token,
    warehouseId,
    dateFrom,
    dateTo,
  }: {
    idProduct: number;
    token: string;
    warehouseId: number;
    dateFrom?: number;
    dateTo?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/warehouse_balances/clearQuantity/product/{id_product}',
      path: {
        id_product: idProduct,
      },
      query: {
        token: token,
        warehouse_id: warehouseId,
        date_from: dateFrom,
        date_to: dateTo,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Warehouse Current Balance
   * Получение текущего остатка товара по складу
   * @returns number Successful Response
   * @throws ApiError
   */
  public static getWarehouseCurrentBalanceWarehouseBalancesWarehouseIdGet({
    warehouseId,
    token,
    nomenclatureId,
    organizationId,
  }: {
    warehouseId: number;
    token: string;
    nomenclatureId: number;
    organizationId: number;
  }): CancelablePromise<number> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/warehouse_balances/{warehouse_id}/',
      path: {
        warehouse_id: warehouseId,
      },
      query: {
        token: token,
        nomenclature_id: nomenclatureId,
        organization_id: organizationId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Warehouse Balances
   * Получение списка остатков склада
   * @returns Page_View_ Successful Response
   * @throws ApiError
   */
  public static getWarehouseBalancesWarehouseBalancesGet({
    token,
    warehouseId,
    nomenclatureId,
    organizationId,
    limit = 100,
    offset,
    page = 1,
    size = 50,
  }: {
    token: string;
    warehouseId: number;
    nomenclatureId?: number;
    organizationId?: number;
    limit?: number;
    offset?: number;
    page?: number;
    size?: number;
  }): CancelablePromise<Page_View_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/warehouse_balances/',
      query: {
        token: token,
        warehouse_id: warehouseId,
        nomenclature_id: nomenclatureId,
        organization_id: organizationId,
        limit: limit,
        offset: offset,
        page: page,
        size: size,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Alt Get Warehouse Balances
   * Получение списка остатков склада
   * @returns ViewRes Successful Response
   * @throws ApiError
   */
  public static altGetWarehouseBalancesAltWarehouseBalancesGet({
    token,
    warehouseId,
    nomenclatureId,
    organizationId,
    dateFrom,
    dateTo,
    limit = 100,
    offset,
  }: {
    token: string;
    warehouseId: number;
    nomenclatureId?: number;
    organizationId?: number;
    dateFrom?: number;
    dateTo?: number;
    limit?: number;
    offset?: number;
  }): CancelablePromise<ViewRes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/alt_warehouse_balances/',
      query: {
        token: token,
        warehouse_id: warehouseId,
        nomenclature_id: nomenclatureId,
        organization_id: organizationId,
        date_from: dateFrom,
        date_to: dateTo,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
