/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { GetEvents } from '../models/GetEvents';

export class EventsService {
  /**
   * Get Events Route
   * @returns GetEvents Successful Response
   * @throws ApiError
   */
  public static getEventsRouteEventsTokenGet({
    token,
    limit = 10,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<GetEvents> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/events/{token}/',
      path: {
        token: token,
      },
      query: {
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
