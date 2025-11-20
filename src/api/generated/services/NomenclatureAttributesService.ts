/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AttributeCreate } from '../models/AttributeCreate';
import type { AttributeCreateResponse } from '../models/AttributeCreateResponse';
import type { AttributeValueCreate } from '../models/AttributeValueCreate';
import type { AttributeValueResponse } from '../models/AttributeValueResponse';
import type { NomenclatureWithAttributesResponse } from '../models/NomenclatureWithAttributesResponse';

export class NomenclatureAttributesService {
  /**
   *   Call
   * @returns AttributeCreateResponse Successful Response
   * @throws ApiError
   */
  public static callNomenclatureAttributesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: AttributeCreate;
  }): CancelablePromise<AttributeCreateResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/nomenclature/attributes',
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callNomenclatureAttributesDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/nomenclature/attributes',
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
   *   Call
   * @returns AttributeValueResponse Successful Response
   * @throws ApiError
   */
  public static callNomenclatureAttributesAddPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: AttributeValueCreate;
  }): CancelablePromise<AttributeValueResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/nomenclature/attributes/add',
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callNomenclatureAttributesDelDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/nomenclature/attributes/del',
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
   *   Call
   * @returns NomenclatureWithAttributesResponse Successful Response
   * @throws ApiError
   */
  public static callNomenclatureNomenclatureIdAttributesGet({
    nomenclatureId,
    token,
  }: {
    nomenclatureId: number;
    token: string;
  }): CancelablePromise<NomenclatureWithAttributesResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/nomenclature/{nomenclature_id}/attributes',
      path: {
        nomenclature_id: nomenclatureId,
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
   *   Call
   * @returns AttributeCreateResponse Successful Response
   * @throws ApiError
   */
  public static callNomenclatureAttributesTypesGet({
    token,
    offset,
    limit = 100,
  }: {
    token: string;
    offset?: number;
    limit?: number;
  }): CancelablePromise<Array<AttributeCreateResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/nomenclature/attributes/types',
      query: {
        token: token,
        offset: offset,
        limit: limit,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
