/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Body_new_picture_pictures__post } from '../models/Body_new_picture_pictures__post';
import type { Picture } from '../models/Picture';
import type { PictureEdit } from '../models/PictureEdit';
import type { PictureListGet } from '../models/PictureListGet';

export class PicturesService {
  /**
   * Get Picture By Id
   * Получение картинки по ID
   * @returns Picture Successful Response
   * @throws ApiError
   */
  public static getPictureByIdPicturesIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Picture> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/pictures/{idx}/',
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
   * Delete Picture
   * Удаление картинки
   * @returns Picture Successful Response
   * @throws ApiError
   */
  public static deletePicturePicturesIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Picture> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/pictures/{idx}/',
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
   * Edit Picture
   * Редактирование картинки
   * @returns Picture Successful Response
   * @throws ApiError
   */
  public static editPicturePicturesIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: PictureEdit;
  }): CancelablePromise<Picture> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/pictures/{idx}/',
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
   * Get Picture By Id
   * Получение картинки по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getPictureByIdPhotosFilenameGet({ filename }: { filename: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/photos/{filename}/',
      path: {
        filename: filename,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Picture Link By Id
   * Получение картинки по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getPictureLinkByIdPhotosLinkFilenameGet({ filename }: { filename: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/photos/link/{filename}/',
      path: {
        filename: filename,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Pictures
   * Получение списка картинок
   * @returns PictureListGet Successful Response
   * @throws ApiError
   */
  public static getPicturesPicturesGet({
    token,
    limit = 100,
    offset,
    entity,
    entityId,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    entity?: string;
    entityId?: number;
  }): CancelablePromise<PictureListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/pictures/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        entity: entity,
        entity_id: entityId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * New Picture
   * Создание картинки
   * @returns Picture Successful Response
   * @throws ApiError
   */
  public static newPicturePicturesPost({
    token,
    entity,
    entityId,
    isMain = false,
    formData,
  }: {
    token: string;
    entity: string;
    entityId: number;
    isMain?: boolean;
    formData?: Body_new_picture_pictures__post;
  }): CancelablePromise<Picture> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/pictures/',
      query: {
        token: token,
        entity: entity,
        entity_id: entityId,
        is_main: isMain,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
