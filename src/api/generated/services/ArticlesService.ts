/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Article } from '../models/Article';
import type { ArticleCreate } from '../models/ArticleCreate';
import type { ArticleEdit } from '../models/ArticleEdit';
import type { Body_add_icon_to_article_articles_add_icon__put } from '../models/Body_add_icon_to_article_articles_add_icon__put';
import type { DebitCreditType } from '../models/DebitCreditType';
import type { GetArticles } from '../models/GetArticles';

export class ArticlesService {
  /**
   * Get Article By Id
   * Получение статьи по ID
   * @returns Article Successful Response
   * @throws ApiError
   */
  public static getArticleByIdArticlesIdGet({ id, token }: { id: number; token: string }): CancelablePromise<Article> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/articles/{id}/',
      path: {
        id: id,
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
   * Get Articles
   * Получение статей кассы
   * @returns GetArticles Successful Response
   * @throws ApiError
   */
  public static getArticlesArticlesGet({
    token,
    limit = 100,
    offset,
    sort = 'created_at:desc',
    name,
    dc,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    sort?: string;
    name?: string;
    dc?: DebitCreditType;
  }): CancelablePromise<GetArticles> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/articles/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        sort: sort,
        name: name,
        dc: dc,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * New Article
   * Создание статьи
   * @returns any Successful Response
   * @throws ApiError
   */
  public static newArticleArticlesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ArticleCreate;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/articles/',
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
   * Edit Article
   * Редактирование статьи
   * @returns any Successful Response
   * @throws ApiError
   */
  public static editArticleArticlesPatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ArticleEdit;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/articles/',
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
   * Add Icon To Article
   * Изменить иконку статьи
   * @returns any Successful Response
   * @throws ApiError
   */
  public static addIconToArticleArticlesAddIconPut({
    token,
    articleId,
    formData,
  }: {
    token: string;
    articleId: number;
    formData: Body_add_icon_to_article_articles_add_icon__put;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/articles/add_icon/',
      query: {
        token: token,
        article_id: articleId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
