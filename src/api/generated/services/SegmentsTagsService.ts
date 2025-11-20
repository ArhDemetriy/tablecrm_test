/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { TagCreate } from '../models/TagCreate';
import type { TagDelete } from '../models/TagDelete';
import type { api__tags__schemas__Tag } from '../models/api__tags__schemas__Tag';

export class SegmentsTagsService {
  /**
   * List Segment Tags
   * Список тегов, привязанных к сегменту
   * @returns api__tags__schemas__Tag Successful Response
   * @throws ApiError
   */
  public static listSegmentTagsSegmentsIdxTagsGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Array<api__tags__schemas__Tag>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/segments/{idx}/tags/',
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
   * Add Tags To Segment
   * Добавляет теги к сегменту.
   * Если тегов с такими именами нет — создаёт их (в рамках cashbox).
   * Возвращает список привязанных к сегменту тегов.
   * @returns api__tags__schemas__Tag Successful Response
   * @throws ApiError
   */
  public static addTagsToSegmentSegmentsIdxTagsPost({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: Array<TagCreate>;
  }): CancelablePromise<Array<api__tags__schemas__Tag>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/segments/{idx}/tags/',
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
   * Remove Tags From Segment
   * Удаляет теги из сегмента по именам, переданным в теле:
   * [{ "name": "vip" }, { "name": "prospect" }]
   * @returns void
   * @throws ApiError
   */
  public static removeTagsFromSegmentSegmentsIdxTagsDelete({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: Array<TagDelete>;
  }): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/segments/{idx}/tags/',
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
