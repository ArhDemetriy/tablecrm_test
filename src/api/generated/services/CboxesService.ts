/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CBUsers } from '../models/CBUsers';
import type { CBUsersList } from '../models/CBUsersList';
import type { CashboxUpdate } from '../models/CashboxUpdate';

export class CboxesService {
  /**
   * Read Cashbox Users
   * Получение юзеров кассы
   * @returns CBUsersList Successful Response
   * @throws ApiError
   */
  public static readCashboxUsersCashboxUsersGet({
    token,
    limit = 100,
    offset,
    sort = 'created_at:desc',
    externalId,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    sort?: string;
    externalId?: string;
  }): CancelablePromise<CBUsersList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/cashbox_users/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        sort: sort,
        external_id: externalId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Edit Cashbox User
   * Обновление статуса юзера кассы
   * @returns CBUsers Successful Response
   * @throws ApiError
   */
  public static editCashboxUserCashboxUsersPut({
    token,
    userId,
    status,
    requestBody,
  }: {
    token: string;
    userId: number;
    status?: boolean;
    requestBody?: CashboxUpdate;
  }): CancelablePromise<CBUsers> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/cashbox_users/',
      query: {
        token: token,
        user_id: userId,
        status: status,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Read Payments Meta
   * Мета юзеров кассы
   * @returns any Successful Response
   * @throws ApiError
   */
  public static readPaymentsMetaCashboxesMetaGet({
    token,
    limit = 100,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/cashboxes_meta/',
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
