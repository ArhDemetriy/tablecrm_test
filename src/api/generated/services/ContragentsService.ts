/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { ContragentCreate } from '../models/ContragentCreate';
import type { ContragentEdit } from '../models/ContragentEdit';

export class ContragentsService {
  /**
   * Read Contragents Meta
   * Получение меты контрагентов
   * @returns any Successful Response
   * @throws ApiError
   */
  public static readContragentsMetaContragentsGet({
    token,
    limit = 100,
    offset,
    sort = 'created_at:desc',
    addTags = false,
    name,
    inn,
    phone,
    externalId,
    updatedAtGte,
    updatedAtLte,
    createdAtGte,
    createdAtLte,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    sort?: string;
    addTags?: boolean;
    name?: string;
    inn?: number;
    phone?: string;
    externalId?: string;
    updatedAtGte?: number;
    updatedAtLte?: number;
    createdAtGte?: number;
    createdAtLte?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contragents/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        sort: sort,
        add_tags: addTags,
        name: name,
        inn: inn,
        phone: phone,
        external_id: externalId,
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callContragentsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ContragentCreate | Array<ContragentCreate>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contragents/',
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
   * Get Contragent By Id
   * Получение контрагента по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getContragentByIdContragentsIdGet({
    id,
    token,
  }: {
    id: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contragents/{id}/',
      path: {
        id: id,
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
   * Update Contragent Data
   * Обновление контрагента
   * @returns any Successful Response
   * @throws ApiError
   */
  public static updateContragentDataContragentsIdPut({
    id,
    token,
    requestBody,
  }: {
    id: number;
    token: string;
    requestBody: ContragentEdit;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contragents/{id}/',
      path: {
        id: id,
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
   * Delete Contragent
   * Удаление контрагента
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteContragentContragentsIdDelete({
    id,
    token,
  }: {
    id: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contragents/{id}/',
      path: {
        id: id,
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
