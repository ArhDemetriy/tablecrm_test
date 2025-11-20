/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { ViewResult } from '../models/ViewResult';
import type { api__docs_purchases__schemas__CreateMass } from '../models/api__docs_purchases__schemas__CreateMass';
import type { api__docs_purchases__schemas__EditMass } from '../models/api__docs_purchases__schemas__EditMass';
import type { api__docs_purchases__schemas__ListView } from '../models/api__docs_purchases__schemas__ListView';
import type { api__docs_purchases__schemas__View } from '../models/api__docs_purchases__schemas__View';

export class DocsPurchasesService {
  /**
   * Get By Id
   * Получение документа по ID
   * @returns api__docs_purchases__schemas__View Successful Response
   * @throws ApiError
   */
  public static getByIdDocsPurchasesIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<api__docs_purchases__schemas__View> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_purchases/{idx}/',
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
   * Get List
   * Получение списка документов
   * @returns ViewResult Successful Response
   * @throws ApiError
   */
  public static getListDocsPurchasesGet({
    token,
    limit = 100,
    offset,
    tags,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    tags?: string;
  }): CancelablePromise<ViewResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_purchases/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        tags: tags,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create
   * Создание документов
   * @returns api__docs_purchases__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static createDocsPurchasesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: api__docs_purchases__schemas__CreateMass;
  }): CancelablePromise<api__docs_purchases__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/docs_purchases/',
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
   * Delete
   * Удаление документов
   * @returns api__docs_purchases__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static deleteDocsPurchasesDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<api__docs_purchases__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/docs_purchases/',
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
   * Редактирование документов
   * @returns api__docs_purchases__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static updateDocsPurchasesPatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: api__docs_purchases__schemas__EditMass;
  }): CancelablePromise<api__docs_purchases__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/docs_purchases/',
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
