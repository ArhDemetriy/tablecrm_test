/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CreateTrigger } from '../models/CreateTrigger';
import type { PatchTrigger } from '../models/PatchTrigger';

export class AmoTriggersService {
  /**
   * Get Triggers List
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getTriggersListSettingsTriggersGet({
    token,
    limit = 5,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/settings/triggers',
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
   * Post Trigger
   * @returns any Successful Response
   * @throws ApiError
   */
  public static postTriggerSettingsTriggersPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: CreateTrigger;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/settings/triggers',
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
   * Get Amo Bots
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getAmoBotsSettingsAmoBotsGet({
    token,
    name,
  }: {
    token: string;
    name?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/settings/amo_bots',
      query: {
        token: token,
        name: name,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Delete Trigger
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteTriggerSettingsTriggersIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/settings/triggers/{idx}',
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
   * Patch Trigger
   * @returns any Successful Response
   * @throws ApiError
   */
  public static patchTriggerSettingsTriggersIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: PatchTrigger;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/settings/triggers/{idx}',
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
