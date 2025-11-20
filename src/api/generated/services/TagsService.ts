/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { TagCreate } from '../models/TagCreate';
import type { api__tags__schemas__Tag } from '../models/api__tags__schemas__Tag';

export class TagsService {
  /**
   * Get Tags
   * @returns api__tags__schemas__Tag Successful Response
   * @throws ApiError
   */
  public static getTagsTagsGet({ token }: { token: string }): CancelablePromise<Array<api__tags__schemas__Tag>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/tags/',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Tag
   * @returns api__tags__schemas__Tag Successful Response
   * @throws ApiError
   */
  public static createTagTagsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: TagCreate;
  }): CancelablePromise<api__tags__schemas__Tag> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/tags/',
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
   * Get Tags
   * @returns api__tags__schemas__Tag Successful Response
   * @throws ApiError
   */
  public static getTagsTagsIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<api__tags__schemas__Tag> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/tags/{idx}',
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
   * Update Tag
   * @returns api__tags__schemas__Tag Successful Response
   * @throws ApiError
   */
  public static updateTagTagsIdxPut({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: TagCreate;
  }): CancelablePromise<api__tags__schemas__Tag> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/tags/{idx}',
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
   * Delete Tag
   * @returns void
   * @throws ApiError
   */
  public static deleteTagTagsIdxDelete({ idx, token }: { idx: number; token: string }): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/tags/{idx}',
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
}
