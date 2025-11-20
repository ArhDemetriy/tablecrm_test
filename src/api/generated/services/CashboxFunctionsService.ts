/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Function } from '../models/Function';
import type { FunctionListGet } from '../models/FunctionListGet';

export class CashboxFunctionsService {
  /**
   * Get User Functions
   * Получение подключённых функций пользователя
   * @returns FunctionListGet Successful Response
   * @throws ApiError
   */
  public static getUserFunctionsCashboxFunctionsGet({
    token,
    limit = 100,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<FunctionListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/cashbox_functions/',
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
   * Activate Function
   * Включение функции
   * @returns Function Successful Response
   * @throws ApiError
   */
  public static activateFunctionCashboxFunctionsPost({
    token,
    _function,
  }: {
    token: string;
    _function: string;
  }): CancelablePromise<Function> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/cashbox_functions/',
      query: {
        token: token,
        function: _function,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Deactivate Function
   * Отключение функции
   * @returns boolean Successful Response
   * @throws ApiError
   */
  public static deactivateFunctionCashboxFunctionsDelete({
    token,
    _function,
  }: {
    token: string;
    _function: string;
  }): CancelablePromise<boolean> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/cashbox_functions/',
      query: {
        token: token,
        function: _function,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
