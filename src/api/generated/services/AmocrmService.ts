/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AddInstallerInfoModel } from '../models/AddInstallerInfoModel';
import type { PatchInstallerInfoModel } from '../models/PatchInstallerInfoModel';

export class AmocrmService {
  /**
   * Sc L
   * @returns any Successful Response
   * @throws ApiError
   */
  public static scLIntegrationPairGet({
    token,
    amoToken,
  }: {
    token: string;
    amoToken: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/integration_pair/',
      query: {
        token: token,
        amo_token: amoToken,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Sc L
   * @returns any Successful Response
   * @throws ApiError
   */
  public static scLGetMyTokenGet({ referer }: { referer: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/get_my_token/',
      query: {
        referer: referer,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Sc L
   * @returns any Successful Response
   * @throws ApiError
   */
  public static scLRefreshMyTokenGet({ referer }: { referer: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/refresh_my_token/',
      query: {
        referer: referer,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Sc L
   * @returns any Successful Response
   * @throws ApiError
   */
  public static scLCheckPairGet({ token }: { token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/check_pair/',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Sc L
   * @returns any Successful Response
   * @throws ApiError
   */
  public static scLIntegrationUnpairGet({ token }: { token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/integration_unpair/',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Sc L
   * @returns any Successful Response
   * @throws ApiError
   */
  public static scLIntegrationOnGet({ token }: { token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/integration_on/',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Sc L
   * @returns any Successful Response
   * @throws ApiError
   */
  public static scLAmoConnectGet({
    code,
    referer,
    platform,
    clientId,
    fromWidget,
  }: {
    code: string;
    referer: string;
    platform: number;
    clientId: string;
    fromWidget: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/amo_connect',
      query: {
        code: code,
        referer: referer,
        platform: platform,
        client_id: clientId,
        from_widget: fromWidget,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Sc L
   * @returns any Successful Response
   * @throws ApiError
   */
  public static scLAmoDisconnectGet({
    accountId,
    clientUuid,
  }: {
    accountId: number;
    clientUuid: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/amo_disconnect',
      query: {
        account_id: accountId,
        client_uuid: clientUuid,
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
  public static callWidgetInstallerPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: AddInstallerInfoModel;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/widget_installer',
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
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callWidgetInstallerPatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: PatchInstallerInfoModel;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/widget_installer',
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
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callWidgetInstallerAmoAccountIdGet({
    amoAccountId,
    token,
  }: {
    amoAccountId: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/widget_installer/{amo_account_id}/',
      path: {
        amo_account_id: amoAccountId,
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
