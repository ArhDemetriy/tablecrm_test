/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Organization } from '../models/Organization';
import type { OrganizationCreate } from '../models/OrganizationCreate';
import type { OrganizationEdit } from '../models/OrganizationEdit';
import type { OrganizationListGet } from '../models/OrganizationListGet';

export class OrganizationsService {
  /**
   * Get Organization By Id
   * Получение организации по ID
   * @returns Organization Successful Response
   * @throws ApiError
   */
  public static getOrganizationByIdOrganizationsIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Organization> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/organizations/{idx}/',
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
   * Delete Organization
   * Удаление организации
   * @returns Organization Successful Response
   * @throws ApiError
   */
  public static deleteOrganizationOrganizationsIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Organization> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/organizations/{idx}/',
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
   * Edit Organization
   * Редактирование организации
   * @returns Organization Successful Response
   * @throws ApiError
   */
  public static editOrganizationOrganizationsIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: OrganizationEdit;
  }): CancelablePromise<Organization> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/organizations/{idx}/',
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
  /**
   * Get Organizations
   * Получение списка компаний
   * @returns OrganizationListGet Successful Response
   * @throws ApiError
   */
  public static getOrganizationsOrganizationsGet({
    token,
    limit = 100,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<OrganizationListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/organizations/',
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
   * New Organization
   * Создание организации
   * @returns Organization Successful Response
   * @throws ApiError
   */
  public static newOrganizationOrganizationsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: OrganizationCreate;
  }): CancelablePromise<Organization> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/organizations/',
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
