/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Body_login_oauth_token_post } from '../models/Body_login_oauth_token_post';

export class OauthService {
  /**
   * Login
   * @returns any Successful Response
   * @throws ApiError
   */
  public static loginOauthTokenPost({ formData }: { formData?: Body_login_oauth_token_post }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/oauth/token',
      formData: formData,
      mediaType: 'application/x-www-form-urlencoded',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Refresh Response
   * @returns any Successful Response
   * @throws ApiError
   */
  public static refreshResponseOauthTokenRefreshPost({
    refreshToken,
    clientId,
  }: {
    refreshToken: string;
    clientId: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/oauth/token/refresh/',
      query: {
        refresh_token: refreshToken,
        client_id: clientId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Jwt Scopes
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getJwtScopesOauthJwtScopesGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/oauth/jwt_scopes/',
    });
  }
  /**
   * Get Jwt Scopes
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getJwtScopesOauthJwtGroupsGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/oauth/jwt_groups/',
    });
  }
}
