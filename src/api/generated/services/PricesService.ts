/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Price } from '../models/Price';
import type { PriceCreateMass } from '../models/PriceCreateMass';
import type { PriceEdit } from '../models/PriceEdit';
import type { PriceEditOne } from '../models/PriceEditOne';
import type { PriceList } from '../models/PriceList';
import type { PriceListGet } from '../models/PriceListGet';
import type { api__prices__schemas__PriceInList } from '../models/api__prices__schemas__PriceInList';

export class PricesService {
  /**
   * Get Price By Id
   * Получение цены по ID
   * @returns Price Successful Response
   * @throws ApiError
   */
  public static getPriceByIdPricesIdxGet({ idx, token }: { idx: number; token: string }): CancelablePromise<Price> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/prices/{idx}/',
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
   * Delete Price
   * Удаление цены
   * @returns api__prices__schemas__PriceInList Successful Response
   * @throws ApiError
   */
  public static deletePricePricesIdxDelete({
    idx,
    token,
    dateFrom,
    dateTo,
  }: {
    idx: number;
    token: string;
    dateFrom?: number;
    dateTo?: number;
  }): CancelablePromise<api__prices__schemas__PriceInList> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/prices/{idx}/',
      path: {
        idx: idx,
      },
      query: {
        token: token,
        date_from: dateFrom,
        date_to: dateTo,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Edit Price
   * Редактирование цены
   * @returns api__prices__schemas__PriceInList Successful Response
   * @throws ApiError
   */
  public static editPricePricesIdxPatch({
    idx,
    token,
    requestBody,
    dateFrom,
    dateTo,
  }: {
    idx: number;
    token: string;
    requestBody: PriceEditOne;
    dateFrom?: number;
    dateTo?: number;
  }): CancelablePromise<api__prices__schemas__PriceInList> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/prices/{idx}/',
      path: {
        idx: idx,
      },
      query: {
        token: token,
        date_from: dateFrom,
        date_to: dateTo,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Price By Id
   * Получение цены по ID номенклатуры
   * @returns Price Successful Response
   * @throws ApiError
   */
  public static getPriceByIdAltPricesIdxGet({
    idx,
    token,
    priceTypeId,
  }: {
    idx: number;
    token: string;
    priceTypeId?: number;
  }): CancelablePromise<Price> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/alt_prices/{idx}/',
      path: {
        idx: idx,
      },
      query: {
        token: token,
        price_type_id: priceTypeId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Prices
   * Получение списка цен
   * @returns PriceListGet Successful Response
   * @throws ApiError
   */
  public static getPricesPricesGet({
    token,
    page = 1,
    limit = 100,
    offset,
    withPhotos = false,
    name,
    type,
    descriptionShort,
    descriptionLong,
    code,
    unit,
    categoryIds,
    manufacturer,
    priceTypeId,
    dateFrom,
    dateTo,
  }: {
    token: string;
    page?: number;
    limit?: number;
    offset?: number;
    /**
     * Включить фото номенклатуры в ответ
     */
    withPhotos?: boolean;
    name?: string;
    type?: string;
    descriptionShort?: string;
    descriptionLong?: string;
    code?: number;
    unit?: number;
    categoryIds?: string;
    manufacturer?: number;
    priceTypeId?: number;
    dateFrom?: number;
    dateTo?: number;
  }): CancelablePromise<PriceListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/prices/',
      query: {
        token: token,
        page: page,
        limit: limit,
        offset: offset,
        with_photos: withPhotos,
        name: name,
        type: type,
        description_short: descriptionShort,
        description_long: descriptionLong,
        code: code,
        unit: unit,
        category_ids: categoryIds,
        manufacturer: manufacturer,
        price_type_id: priceTypeId,
        date_from: dateFrom,
        date_to: dateTo,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * New Price
   * Создание цен
   * @returns PriceList Successful Response
   * @throws ApiError
   */
  public static newPricePricesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: PriceCreateMass;
  }): CancelablePromise<PriceList> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/prices/',
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
   * Delete Price Mass
   * Удаление цены пачкой
   * @returns PriceList Successful Response
   * @throws ApiError
   */
  public static deletePriceMassPricesDelete({
    token,
    ids,
    dateFrom,
    dateTo,
  }: {
    token: string;
    ids: string;
    dateFrom?: number;
    dateTo?: number;
  }): CancelablePromise<PriceList> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/prices/',
      query: {
        token: token,
        ids: ids,
        date_from: dateFrom,
        date_to: dateTo,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Edit Price
   * Редактирование цены пачкой
   * @returns PriceList Successful Response
   * @throws ApiError
   */
  public static editPricePricesPatch({
    token,
    requestBody,
    dateFrom,
    dateTo,
  }: {
    token: string;
    requestBody: Array<PriceEdit>;
    dateFrom?: number;
    dateTo?: number;
  }): CancelablePromise<PriceList> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/prices/',
      query: {
        token: token,
        date_from: dateFrom,
        date_to: dateTo,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
