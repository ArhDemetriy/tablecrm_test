/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CreateSetting } from '../models/CreateSetting';
import type { EditSetting } from '../models/EditSetting';

export class LoyalitySettingsService {
  /**
   * Get Loyality Settings
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getLoyalitySettingsLoyalitySettingsGet({
    token,
    organizationId,
  }: {
    token: string;
    organizationId?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/loyality_settings/',
      query: {
        token: token,
        organization_id: organizationId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Loyality Setting
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createLoyalitySettingLoyalitySettingsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: CreateSetting;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/loyality_settings/',
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
   * Edit Loyality Setting
   * @returns any Successful Response
   * @throws ApiError
   */
  public static editLoyalitySettingLoyalitySettingsDelete({
    token,
    organizationId,
  }: {
    token: string;
    organizationId?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/loyality_settings/',
      query: {
        token: token,
        organization_id: organizationId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Edit Loyality Setting
   * @returns any Successful Response
   * @throws ApiError
   */
  public static editLoyalitySettingLoyalitySettingsPatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: EditSetting;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/loyality_settings/',
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
