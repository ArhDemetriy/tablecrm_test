/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AccountInfo } from '../models/AccountInfo';

export class AccountService {
  /**
   * Get Account Info
   * Получение информации об аккаунте и оплате
   * @returns AccountInfo Successful Response
   * @throws ApiError
   */
  public static getAccountInfoAccountInfoGet({ token }: { token: string }): CancelablePromise<AccountInfo> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/account/info/',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
