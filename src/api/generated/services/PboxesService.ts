/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { GetPaymentsShort } from '../models/GetPaymentsShort';
import type { Payboxes } from '../models/Payboxes';
import type { PayboxesCreate } from '../models/PayboxesCreate';
import type { PayboxesEdit } from '../models/PayboxesEdit';
import type { api__pboxes__schemas__GetPayments } from '../models/api__pboxes__schemas__GetPayments';

export class PboxesService {
  /**
   * Read Payboxes Meta
   * Получение счетов
   * @returns api__pboxes__schemas__GetPayments Successful Response
   * @throws ApiError
   */
  public static readPayboxesMetaPayboxesGet({
    token,
    limit = 100,
    offset,
    sort = 'created_at:desc',
    externalId,
    name,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    sort?: string;
    externalId?: string;
    name?: string;
  }): CancelablePromise<api__pboxes__schemas__GetPayments> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payboxes/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        sort: sort,
        external_id: externalId,
        name: name,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update Paybox Data
   * Обновление счета
   * @returns Payboxes Successful Response
   * @throws ApiError
   */
  public static updatePayboxDataPayboxesPut({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: PayboxesEdit;
  }): CancelablePromise<Payboxes> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/payboxes/',
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
   * Create Paybox
   * Создание счета
   * @returns Payboxes Successful Response
   * @throws ApiError
   */
  public static createPayboxPayboxesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: PayboxesCreate;
  }): CancelablePromise<Payboxes> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payboxes/',
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
   * Get Paybox By Id
   * Получение счета по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getPayboxByIdPayboxesIdGet({ id, token }: { id: number; token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payboxes/{id}/',
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
   * Read Payboxes Short
   * Получение краткой информации по всем счетам
   * @returns GetPaymentsShort Successful Response
   * @throws ApiError
   */
  public static readPayboxesShortPayboxesAltGet({
    token,
    limit = 100,
    offset,
    sort = 'created_at:desc',
    externalId,
    name,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    sort?: string;
    externalId?: string;
    name?: string;
  }): CancelablePromise<GetPaymentsShort> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payboxes_alt/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        sort: sort,
        external_id: externalId,
        name: name,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
