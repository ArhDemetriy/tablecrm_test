/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { WebappResponse } from '../models/WebappResponse';

export class WebappService {
  /**
   * Get Nomenclature
   * Получение номенклатуры по поисковым параметрам. Содержит название,
   * тип (Товар или Услуга), описание, код, единицы, названия категорий,
   * производителя, дату-время создания и обновления, фотографии, цены и
   * складские балансы. Требует действительный токен владельца кассы / товаров
   * @returns WebappResponse Successful Response
   * @throws ApiError
   */
  public static getNomenclatureWebappGet({
    token,
    warehouseId,
    nomenclatureId,
    organizationId,
    name,
    type,
    descriptionShort,
    descriptionLong,
    code,
    unit,
    categoryIds,
    manufacturer,
    dateFrom,
    dateTo,
    entity,
    entityId,
    priceTypeId,
    limit = 100,
    offset,
  }: {
    /**
     * Токен для аутентификации. Запрос вернёт только те объекты, которые принадлежат пользователю.
     */
    token: string;
    warehouseId?: number;
    nomenclatureId?: number;
    organizationId?: number;
    /**
     * Полное название или его часть.
     */
    name?: string;
    /**
     * Тип полностью (напр., product или service).
     */
    type?: string;
    /**
     * Короткое описание или его часть.
     */
    descriptionShort?: string;
    /**
     * Подробное описание или его часть.
     */
    descriptionLong?: string;
    code?: number;
    unit?: number;
    /**
     * Целочисленные идентификаторы категорий. Несколько категорий указываются через запятую.
     */
    categoryIds?: string;
    /**
     * Название производителя или его часть.
     */
    manufacturer?: string;
    /**
     * Начальная дата для фильтрации по дате создания.
     */
    dateFrom?: number;
    /**
     * Конечная дата для фильтрации по дате создания.
     */
    dateTo?: number;
    /**
     * Entity для фильтрации по изображениям.
     */
    entity?: string;
    /**
     * Entity ID для фильтрации по изображениям.
     */
    entityId?: number;
    /**
     * Price Type ID для фильтрации по ценам.
     */
    priceTypeId?: number;
    limit?: number;
    offset?: number;
  }): CancelablePromise<WebappResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/webapp/',
      query: {
        token: token,
        warehouse_id: warehouseId,
        nomenclature_id: nomenclatureId,
        organization_id: organizationId,
        name: name,
        type: type,
        description_short: descriptionShort,
        description_long: descriptionLong,
        code: code,
        unit: unit,
        category_ids: categoryIds,
        manufacturer: manufacturer,
        date_from: dateFrom,
        date_to: dateTo,
        entity: entity,
        entity_id: entityId,
        price_type_id: priceTypeId,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
