/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { api__fifo_settings__schemas__Create } from '../models/api__fifo_settings__schemas__Create';
import type { api__fifo_settings__schemas__Edit } from '../models/api__fifo_settings__schemas__Edit';
import type { api__fifo_settings__schemas__View } from '../models/api__fifo_settings__schemas__View';

export class FifoSettingsService {
  /**
   * Get By Id
   * Получение настроек по ID организации
   * @returns api__fifo_settings__schemas__View Successful Response
   * @throws ApiError
   */
  public static getByIdFifoSettingsIdxGet({
    token,
    organizationId,
  }: {
    token: string;
    organizationId: number;
  }): CancelablePromise<api__fifo_settings__schemas__View> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/fifo_settings/{idx}/',
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
   * Create
   * Создание настроек организации
   * @returns api__fifo_settings__schemas__View Successful Response
   * @throws ApiError
   */
  public static createFifoSettingsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: api__fifo_settings__schemas__Create;
  }): CancelablePromise<api__fifo_settings__schemas__View> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/fifo_settings/',
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
   * Update
   * Редактирование настроек организации
   * @returns api__fifo_settings__schemas__View Successful Response
   * @throws ApiError
   */
  public static updateFifoSettingsOrganizationIdPatch({
    organizationId,
    token,
    requestBody,
  }: {
    organizationId: number;
    token: string;
    requestBody: api__fifo_settings__schemas__Edit;
  }): CancelablePromise<api__fifo_settings__schemas__View> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/fifo_settings/{organization_id}/',
      path: {
        organization_id: organizationId,
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
