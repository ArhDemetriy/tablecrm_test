/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CreateApp } from '../models/CreateApp';
import type { ShowIntegrationGet } from '../models/ShowIntegrationGet';
import type { UpdateIntegration } from '../models/UpdateIntegration';

export class IntegrationsService {
  /**
   * Get Ints By Token
   * @returns ShowIntegrationGet Successful Response
   * @throws ApiError
   */
  public static getIntsByTokenIntegrationsGet({ token }: { token: string }): CancelablePromise<ShowIntegrationGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/integrations/',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Integration
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createIntegrationIntegrationsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: CreateApp;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/integrations/',
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
   * Update Integration
   * @returns any Successful Response
   * @throws ApiError
   */
  public static updateIntegrationIntegrationsIntgIdPatch({
    intgId,
    token,
    requestBody,
  }: {
    intgId: number;
    token: string;
    requestBody: UpdateIntegration;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/integrations/{intg_id}/',
      path: {
        intg_id: intgId,
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
  /**
   * Install App
   * @returns any Successful Response
   * @throws ApiError
   */
  public static installAppIntegrationsInstallIntgIdPost({
    intgId,
    token,
  }: {
    intgId: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/integrations/install/{intg_id}/',
      path: {
        intg_id: intgId,
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
