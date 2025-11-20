/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModuleBankService {
  /**
   * Moduloauth
   * Hook для oauth банка
   * @returns any Successful Response
   * @throws ApiError
   */
  public static moduloauthBankModuloauthGet({ code, state }: { code: string; state: number }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/bank/moduloauth',
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
  public static getTokenForScopeModuleBankGetOauthLinkGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/module_bank/get_oauth_link/',
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
  public static integrationOnModuleBankIntegrationOnGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/module_bank/integration_on',
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
  public static integrationOffModuleBankIntegrationOffGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/module_bank/integration_off',
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
  public static checkModuleBankCheckGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/module_bank/check',
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
  public static accountsModuleBankAccountsGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/module_bank/accounts/',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
