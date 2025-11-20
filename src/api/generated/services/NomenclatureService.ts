/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Manufacturer } from '../models/Manufacturer';
import type { ManufacturerCreateMass } from '../models/ManufacturerCreateMass';
import type { ManufacturerEdit } from '../models/ManufacturerEdit';
import type { ManufacturerList } from '../models/ManufacturerList';
import type { ManufacturerListGet } from '../models/ManufacturerListGet';
import type { NomenclatureBarcodeCreate } from '../models/NomenclatureBarcodeCreate';
import type { NomenclatureCreateMass } from '../models/NomenclatureCreateMass';
import type { NomenclatureEdit } from '../models/NomenclatureEdit';
import type { NomenclatureEditMass } from '../models/NomenclatureEditMass';
import type { NomenclatureList } from '../models/NomenclatureList';
import type { NomenclatureListGetRes } from '../models/NomenclatureListGetRes';
import type { NomenclaturesListPatch } from '../models/NomenclaturesListPatch';
import type { api__nomenclature__schemas__Nomenclature } from '../models/api__nomenclature__schemas__Nomenclature';

export class NomenclatureService {
  /**
   * Patch Nomenclature Barcodes
   * Изменение штрихкодов категории по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static patchNomenclatureBarcodesNomenclatureBarcodePatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<NomenclaturesListPatch>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/nomenclature/barcode',
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
   * Get Nomenclature Barcodes
   * Получение штрихкодов категории по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getNomenclatureBarcodesNomenclatureIdxBarcodeGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/nomenclature/{idx}/barcode',
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
   * Add Barcode To Nomenclature
   * Добавление штрихкода к категории по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static addBarcodeToNomenclatureNomenclatureIdxBarcodePost({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: NomenclatureBarcodeCreate;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/nomenclature/{idx}/barcode',
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
   * Delete Barcode To Nomenclature
   * Добавление штрихкода к категории по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteBarcodeToNomenclatureNomenclatureIdxBarcodeDelete({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: NomenclatureBarcodeCreate;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/nomenclature/{idx}/barcode',
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
   * Get Nomenclature By Ids
   * Получение списка номенклатур по списку ID категорий
   * @returns NomenclatureListGetRes Successful Response
   * @throws ApiError
   */
  public static getNomenclatureByIdsNomenclaturesPost({
    token,
    requestBody,
    withPrices = false,
    withBalance = false,
  }: {
    token: string;
    requestBody: Array<number>;
    withPrices?: boolean;
    withBalance?: boolean;
  }): CancelablePromise<NomenclatureListGetRes> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/nomenclatures/',
      query: {
        token: token,
        with_prices: withPrices,
        with_balance: withBalance,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Nomenclature
   * @returns NomenclatureListGetRes Successful Response
   * @throws ApiError
   */
  public static getNomenclatureNomenclatureGet({
    token,
    name,
    barcode,
    category,
    limit = 100,
    offset,
    withPrices = false,
    withBalance = false,
    withAttributes = false,
    withPhotos = false,
    onlyMainFromGroup = false,
    minPrice,
    maxPrice,
    sort = 'created_at:desc',
    updatedAtGte,
    updatedAtLte,
    createdAtGte,
    createdAtLte,
  }: {
    token: string;
    name?: string;
    barcode?: string;
    category?: number;
    limit?: number;
    offset?: number;
    withPrices?: boolean;
    withBalance?: boolean;
    /**
     * Включить атрибуты номенклатуры в ответ
     */
    withAttributes?: boolean;
    /**
     * Включить фото номенклатуры в ответ
     */
    withPhotos?: boolean;
    onlyMainFromGroup?: boolean;
    /**
     * Минимальная цена для фильтрации
     */
    minPrice?: number;
    /**
     * Максимальная цена для фильтрации
     */
    maxPrice?: number;
    sort?: string;
    updatedAtGte?: number;
    updatedAtLte?: number;
    createdAtGte?: number;
    createdAtLte?: number;
  }): CancelablePromise<NomenclatureListGetRes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/nomenclature/',
      query: {
        token: token,
        name: name,
        barcode: barcode,
        category: category,
        limit: limit,
        offset: offset,
        with_prices: withPrices,
        with_balance: withBalance,
        with_attributes: withAttributes,
        with_photos: withPhotos,
        only_main_from_group: onlyMainFromGroup,
        min_price: minPrice,
        max_price: maxPrice,
        sort: sort,
        updated_at__gte: updatedAtGte,
        updated_at__lte: updatedAtLte,
        created_at__gte: createdAtGte,
        created_at__lte: createdAtLte,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * New Nomenclature
   * Создание категории
   * @returns NomenclatureList Successful Response
   * @throws ApiError
   */
  public static newNomenclatureNomenclaturePost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: NomenclatureCreateMass;
  }): CancelablePromise<NomenclatureList> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/nomenclature/',
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
   * Delete Nomenclature Mass
   * Удаление категории пачкой
   * @returns api__nomenclature__schemas__Nomenclature Successful Response
   * @throws ApiError
   */
  public static deleteNomenclatureMassNomenclatureDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<Array<api__nomenclature__schemas__Nomenclature>> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/nomenclature/',
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
   * Edit Nomenclature Mass
   * Редактирование номенклатуры пачкой
   * @returns api__nomenclature__schemas__Nomenclature Successful Response
   * @throws ApiError
   */
  public static editNomenclatureMassNomenclaturePatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<NomenclatureEditMass>;
  }): CancelablePromise<Array<api__nomenclature__schemas__Nomenclature>> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/nomenclature/',
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
   * Delete Nomenclature
   * Удаление категории
   * @returns api__nomenclature__schemas__Nomenclature Successful Response
   * @throws ApiError
   */
  public static deleteNomenclatureNomenclatureIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<api__nomenclature__schemas__Nomenclature> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/nomenclature/{idx}/',
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
   * Edit Nomenclature
   * Редактирование категории
   * @returns api__nomenclature__schemas__Nomenclature Successful Response
   * @throws ApiError
   */
  public static editNomenclatureNomenclatureIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: NomenclatureEdit;
  }): CancelablePromise<api__nomenclature__schemas__Nomenclature> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/nomenclature/{idx}/',
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
   *   Call
   * Получение производителя по ID
   * @returns Manufacturer Successful Response
   * @throws ApiError
   */
  public static callManufacturersIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Manufacturer> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/manufacturers/{idx}/',
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
   *   Call
   * Удаление производителя
   * @returns Manufacturer Successful Response
   * @throws ApiError
   */
  public static callManufacturersIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Manufacturer> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/manufacturers/{idx}/',
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
   *   Call
   * Редактирование производителя
   * @returns Manufacturer Successful Response
   * @throws ApiError
   */
  public static callManufacturersIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: ManufacturerEdit;
  }): CancelablePromise<Manufacturer> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/manufacturers/{idx}/',
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
   *   Call
   * Получение списка производителей
   * @returns ManufacturerListGet Successful Response
   * @throws ApiError
   */
  public static callManufacturersGet({
    token,
    limit = 100,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<ManufacturerListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/manufacturers/',
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
   *   Call
   * Создание производителя
   * @returns ManufacturerList Successful Response
   * @throws ApiError
   */
  public static callManufacturersPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ManufacturerCreateMass;
  }): CancelablePromise<ManufacturerList> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/manufacturers/',
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
