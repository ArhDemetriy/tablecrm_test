/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Segment } from '../models/Segment';
import type { SegmentContragentData } from '../models/SegmentContragentData';
import type { SegmentCreate } from '../models/SegmentCreate';
import type { SegmentWithContragents } from '../models/SegmentWithContragents';

export class SegmentsService {
  /**
   * Get User Segments
   * @returns SegmentWithContragents Successful Response
   * @throws ApiError
   */
  public static getUserSegmentsSegmentsGet({
    token,
    isArchived,
  }: {
    token: string;
    isArchived?: boolean;
  }): CancelablePromise<Array<SegmentWithContragents>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/segments/',
      query: {
        token: token,
        is_archived: isArchived,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Segments
   * @returns Segment Successful Response
   * @throws ApiError
   */
  public static createSegmentsSegmentsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: SegmentCreate;
  }): CancelablePromise<Segment> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/segments/',
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
   * Get Segment
   * @returns Segment Successful Response
   * @throws ApiError
   */
  public static getSegmentSegmentsIdxGet({ idx, token }: { idx: number; token: string }): CancelablePromise<Segment> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/segments/{idx}',
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
   * Update Segments
   * @returns Segment Successful Response
   * @throws ApiError
   */
  public static updateSegmentsSegmentsIdxPut({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: SegmentCreate;
  }): CancelablePromise<Segment> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/segments/{idx}',
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
   * Refresh Segments
   * @returns Segment Successful Response
   * @throws ApiError
   */
  public static refreshSegmentsSegmentsIdxPost({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Segment> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/segments/{idx}',
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
   * Delete Segments
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteSegmentsSegmentsIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/segments/{idx}',
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
   * Get Segment Data
   * @returns SegmentContragentData Successful Response
   * @throws ApiError
   */
  public static getSegmentDataSegmentsIdxResultGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<SegmentContragentData> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/segments/{idx}/result',
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
