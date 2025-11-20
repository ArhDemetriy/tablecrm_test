/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Category } from '../models/Category';
import type { CategoryCreateMass } from '../models/CategoryCreateMass';
import type { CategoryEdit } from '../models/CategoryEdit';
import type { CategoryList } from '../models/CategoryList';
import type { CategoryListGet } from '../models/CategoryListGet';
import type { CategoryTreeGet } from '../models/CategoryTreeGet';

export class CategoriesService {
  /**
   * Get Category By Id
   * Получение категории по ID
   * @returns Category Successful Response
   * @throws ApiError
   */
  public static getCategoryByIdCategoriesIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Category> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/categories/{idx}/',
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
   * Delete Category
   * Удаление категории
   * @returns Category Successful Response
   * @throws ApiError
   */
  public static deleteCategoryCategoriesIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Category> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/categories/{idx}/',
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
   * Edit Category
   * Редактирование категории
   * @returns Category Successful Response
   * @throws ApiError
   */
  public static editCategoryCategoriesIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: CategoryEdit;
  }): CancelablePromise<Category> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/categories/{idx}/',
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
   * Delete Category Photo
   * Установка в pictures is_deleted=True и установка category.photo_id = None
   * @returns Category Successful Response
   * @throws ApiError
   */
  public static deleteCategoryPhotoCategoriesIdxPhotoDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Category> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/categories/{idx}/photo',
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
   *   Call
   * Получение списка категорий, отсортированных по дате создания
   * @returns CategoryListGet Successful Response
   * @throws ApiError
   */
  public static callCategoriesGet({
    token,
    limit = 100,
    offset,
    includePhoto = false,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    includePhoto?: boolean;
  }): CancelablePromise<CategoryListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/categories/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        include_photo: includePhoto,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * New Categories
   * Создание категорий
   * @returns CategoryList Successful Response
   * @throws ApiError
   */
  public static newCategoriesCategoriesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: CategoryCreateMass;
  }): CancelablePromise<CategoryList> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/categories/',
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
   * Получение древа списка категорий
   * @returns CategoryTreeGet Successful Response
   * @throws ApiError
   */
  public static callCategoriesTreeGet({
    token,
    nomenclatureName,
    offset,
    limit = 100,
    includePhoto = true,
  }: {
    token: string;
    nomenclatureName?: string;
    offset?: number;
    limit?: number;
    includePhoto?: boolean;
  }): CancelablePromise<CategoryTreeGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/categories_tree/',
      query: {
        token: token,
        nomenclature_name: nomenclatureName,
        offset: offset,
        limit: limit,
        include_photo: includePhoto,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   *   Call
   * @returns CategoryTreeGet Successful Response
   * @throws ApiError
   */
  public static callCategoriesTreeIdxChildrenGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<CategoryTreeGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/categories_tree/{idx}/children/',
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
