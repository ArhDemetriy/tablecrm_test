/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CreateCashboxSettings } from '../models/CreateCashboxSettings';
import type { PatchCashboxSettings } from '../models/PatchCashboxSettings';

export class CashboxSettingsService {
  /**
   * Get Cashbox Settings
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getCashboxSettingsCashboxSettingsGet({ token }: { token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/cashbox/settings',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Cashbox Settings
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createCashboxSettingsCashboxSettingsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: CreateCashboxSettings;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/cashbox/settings',
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
   * Delete Cashbox Settings
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteCashboxSettingsCashboxSettingsIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/cashbox/settings/{idx}',
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
   * Patch Cashbox Settings
   * @returns any Successful Response
   * @throws ApiError
   */
  public static patchCashboxSettingsCashboxSettingsIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: PatchCashboxSettings;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/cashbox/settings/{idx}',
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
