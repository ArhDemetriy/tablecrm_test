/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AccountUpdate } from '../models/AccountUpdate';

export class TochkaBankService {
  /**
   * Refresh Token
   * @returns any Successful Response
   * @throws ApiError
   */
  public static refreshTokenBankRefreshTokenPost({
    integrationCashboxes,
  }: {
    integrationCashboxes: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/bank/refresh_token',
      query: {
        integration_cashboxes: integrationCashboxes,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Tochkaoauth
   * Hook для oauth банка
   * @returns any Successful Response
   * @throws ApiError
   */
  public static tochkaoauthBankTochkaoauthGet({
    code,
    state,
  }: {
    code: string;
    state: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/bank/tochkaoauth',
      query: {
        code: code,
        state: state,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Token For Scope
   * Получение токена для работы с разрешениями
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getTokenForScopeBankGetOauthLinkGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/bank/get_oauth_link/',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Check
   * Проверка установлена или нет интеграция у клиента
   * @returns any Successful Response
   * @throws ApiError
   */
  public static checkBankCheckGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/bank/check',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Integration On
   * Установка связи аккаунта пользователя и интеграции
   * @returns any Successful Response
   * @throws ApiError
   */
  public static integrationOnBankIntegrationOnGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/bank/integration_on',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Integration Off
   * Удаление связи аккаунта пользователя и интеграции
   * @returns any Successful Response
   * @throws ApiError
   */
  public static integrationOffBankIntegrationOffGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/bank/integration_off',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Accounts
   * Получение списка счетов аккаунта банка
   * @returns any Successful Response
   * @throws ApiError
   */
  public static accountsBankAccountsGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/bank/accounts/',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update Account
   * Обновление счета аккаунта банка
   * @returns any Successful Response
   * @throws ApiError
   */
  public static updateAccountBankAccountsUpdateIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: AccountUpdate;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/bank/accounts/update/{idx}/',
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
}
