/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CreateListView } from '../models/CreateListView';
import type { api__docs_reconciliation__schemas__CreateMass } from '../models/api__docs_reconciliation__schemas__CreateMass';
import type { api__docs_reconciliation__schemas__ListView } from '../models/api__docs_reconciliation__schemas__ListView';
import type { api__docs_reconciliation__schemas__ListViewGet } from '../models/api__docs_reconciliation__schemas__ListViewGet';
import type { api__docs_reconciliation__schemas__View } from '../models/api__docs_reconciliation__schemas__View';

export class DocsReconciliationService {
  /**
   * Get By Id
   * Получение документа по ID
   * @returns api__docs_reconciliation__schemas__View Successful Response
   * @throws ApiError
   */
  public static getByIdDocsReconciliationIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<api__docs_reconciliation__schemas__View> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_reconciliation/{idx}/',
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
   * Delete
   * Удаление документов
   * @returns api__docs_reconciliation__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static deleteDocsReconciliationIdxDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<api__docs_reconciliation__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/docs_reconciliation/{idx}/',
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
   * Get List
   * Получение списка документов
   * @returns api__docs_reconciliation__schemas__ListViewGet Successful Response
   * @throws ApiError
   */
  public static getListDocsReconciliationGet({
    token,
    limit = 100,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<api__docs_reconciliation__schemas__ListViewGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_reconciliation/',
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
   * Create
   * Создание документов
   * @returns CreateListView Successful Response
   * @throws ApiError
   */
  public static createDocsReconciliationPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: api__docs_reconciliation__schemas__CreateMass;
  }): CancelablePromise<CreateListView> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/docs_reconciliation/',
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
