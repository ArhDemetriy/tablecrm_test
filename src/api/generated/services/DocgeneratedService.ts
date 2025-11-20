/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { ReGenerateList } from '../models/ReGenerateList';
import type { TypeDoc } from '../models/TypeDoc';

export class DocgeneratedService {
  /**
   * Get Doc Generate List
   * Получение списка генераций
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getDocGenerateListDocgeneratedGet({
    token,
    tags,
    limit = 100,
    offset,
  }: {
    token: string;
    tags?: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docgenerated/',
      query: {
        token: token,
        tags: tags,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Doc Generate
   * Генерирование документа с загрузкой в S3 и фиксацией записи генерации
   * @returns any Successful Response
   * @throws ApiError
   */
  public static docGenerateDocgeneratedPost({
    token,
    templateId,
    typeDoc,
    requestBody,
    entity,
    entityId,
    tags,
  }: {
    token: string;
    templateId: number;
    typeDoc: TypeDoc;
    requestBody: Record<string, any>;
    entity?: string;
    entityId?: number;
    tags?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/docgenerated/',
      query: {
        token: token,
        template_id: templateId,
        type_doc: typeDoc,
        entity: entity,
        entity_id: entityId,
        tags: tags,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Doc Generate By Idx
   * Получение реквизитов документа по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getDocGenerateByIdxDocgeneratedIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docgenerated/{idx}',
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
   * Get Generate Docs By Filename
   * Получение документа по имени файла
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getGenerateDocsByFilenameDocgeneratedFileFilenameGet({
    filename,
    typeDoc,
  }: {
    filename: string;
    typeDoc: TypeDoc;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docgenerated/file/{filename}',
      path: {
        filename: filename,
      },
      query: {
        type_doc: typeDoc,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Regenerated
   * @returns any Successful Response
   * @throws ApiError
   */
  public static regeneratedRegeneratedPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ReGenerateList;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/regenerated/',
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
