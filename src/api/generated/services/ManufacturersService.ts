/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { NomenclatureGet } from '../models/NomenclatureGet';

export class ManufacturersService {
  /**
   *   Call
   * @returns NomenclatureGet Successful Response
   * @throws ApiError
   */
  public static callNomenclatureIdxGet({
    idx,
    token,
    withPrices = false,
  }: {
    idx: number;
    token: string;
    withPrices?: boolean;
  }): CancelablePromise<NomenclatureGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/nomenclature/{idx}/',
      path: {
        idx: idx,
      },
      query: {
        token: token,
        with_prices: withPrices,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
