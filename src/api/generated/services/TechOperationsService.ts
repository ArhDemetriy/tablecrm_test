/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { TechOperation } from '../models/TechOperation';
import type { TechOperationComponentCreate } from '../models/TechOperationComponentCreate';
import type { TechOperationCreate } from '../models/TechOperationCreate';
import type { api__tech_cards__schemas__TechCardStatus } from '../models/api__tech_cards__schemas__TechCardStatus';

export class TechOperationsService {
  /**
   * Get Tech Operations
   * @returns TechOperation Successful Response
   * @throws ApiError
   */
  public static getTechOperationsTechOperationsGet({
    token,
    techCardId,
    status,
    limit = 10,
    offset,
  }: {
    token: string;
    techCardId?: string;
    status?: api__tech_cards__schemas__TechCardStatus;
    limit?: number;
    offset?: number;
  }): CancelablePromise<Array<TechOperation>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/tech_operations/',
      query: {
        token: token,
        tech_card_id: techCardId,
        status: status,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Tech Operation
   * @returns TechOperation Successful Response
   * @throws ApiError
   */
  public static createTechOperationTechOperationsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: TechOperationCreate;
  }): CancelablePromise<TechOperation> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/tech_operations/',
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
   * Bulk Create Tech Operations
   * @returns TechOperation Successful Response
   * @throws ApiError
   */
  public static bulkCreateTechOperationsTechOperationsBulkPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<TechOperationCreate>;
  }): CancelablePromise<Array<TechOperation>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/tech_operations/bulk',
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
   * Cancel Tech Operation
   * @returns TechOperation Successful Response
   * @throws ApiError
   */
  public static cancelTechOperationTechOperationsIdxCancelPost({
    idx,
    token,
  }: {
    idx: string;
    token: string;
  }): CancelablePromise<TechOperation> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/tech_operations/{idx}/cancel',
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
   * Delete Tech Operation
   * @returns void
   * @throws ApiError
   */
  public static deleteTechOperationTechOperationsIdxDelete({
    idx,
    token,
  }: {
    idx: string;
    token: string;
  }): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/tech_operations/{idx}',
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
   * Add Items To Operation
   * @returns any Successful Response
   * @throws ApiError
   */
  public static addItemsToOperationTechOperationsIdxItemsPost({
    idx,
    token,
    requestBody,
  }: {
    idx: string;
    token: string;
    requestBody: Array<TechOperationComponentCreate>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/tech_operations/{idx}/items',
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
