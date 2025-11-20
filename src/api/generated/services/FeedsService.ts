/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { FeedCreate } from '../models/FeedCreate';
import type { FeedUpdate } from '../models/FeedUpdate';

export class FeedsService {
  /**
   * Get Feeds
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getFeedsFeedsGet({ token }: { token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/feeds',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Feed
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createFeedFeedsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: FeedCreate;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/feeds',
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
   * Get Feed
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getFeedFeedsUrlTokenGet({ urlToken }: { urlToken: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/feeds/{url_token}',
      path: {
        url_token: urlToken,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Delete Feed
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteFeedFeedsIdxDelete({ idx, token }: { idx: number; token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/feeds/{idx}',
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
   * Update Feed
   * @returns any Successful Response
   * @throws ApiError
   */
  public static updateFeedFeedsIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: FeedUpdate;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/feeds/{idx}',
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
