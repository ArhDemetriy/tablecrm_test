/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Install } from '../models/Install';
import type { InstallCreate } from '../models/InstallCreate';
import type { InstallSettings } from '../models/InstallSettings';

export class InstallService {
  /**
   * Get Install Route
   * @returns Install Successful Response
   * @throws ApiError
   */
  public static getInstallRouteInstallGet({
    md5Key,
    devicetoken,
  }: {
    md5Key?: string;
    devicetoken?: string;
  }): CancelablePromise<Install> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/install/',
      query: {
        md5key: md5Key,
        devicetoken: devicetoken,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Install Route
   * @returns Install Successful Response
   * @throws ApiError
   */
  public static createInstallRouteInstallNewIosKeyPost({
    key,
    requestBody,
  }: {
    key: string;
    requestBody: InstallCreate;
  }): CancelablePromise<Install> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/install/new/ios/{key}/',
      path: {
        key: key,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Install Bundle User Route
   * @returns any Successful Response
   * @throws ApiError
   */
  public static installBundleUserRouteInstallIosLinkPost({
    tgtoken,
    md5Key,
  }: {
    tgtoken: string;
    md5Key: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/install/ios/link/',
      query: {
        tgtoken: tgtoken,
        md5key: md5Key,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Delink Install Bundle User Route
   * @returns any Successful Response
   * @throws ApiError
   */
  public static delinkInstallBundleUserRouteInstallIosDelinkPost({
    tgtoken,
    md5Key,
  }: {
    tgtoken: string;
    md5Key: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/install/ios/delink/',
      query: {
        tgtoken: tgtoken,
        md5key: md5Key,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Set Settings Install Route
   * @returns any Successful Response
   * @throws ApiError
   */
  public static setSettingsInstallRouteInstallSettingsMd5KeyPatch({
    md5Key,
    requestBody,
  }: {
    md5Key: string;
    requestBody: InstallSettings;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/install/settings/{md5key}/',
      path: {
        md5key: md5Key,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
