/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AutosuggestResponse } from '../models/AutosuggestResponse';

export class AutosuggestionsService {
  /**
   * Autosuggest Location
   * @returns AutosuggestResponse Successful Response
   * @throws ApiError
   */
  public static autosuggestLocationAutosuggestionsGeolocationGet({
    query,
    limit = 5,
  }: {
    query: string;
    limit?: number;
  }): CancelablePromise<AutosuggestResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/autosuggestions/geolocation',
      query: {
        query: query,
        limit: limit,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
