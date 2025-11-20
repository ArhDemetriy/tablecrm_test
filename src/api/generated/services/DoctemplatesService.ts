/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Body_add_template_doctemplates__post } from '../models/Body_add_template_doctemplates__post';
import type { Body_update_template_doctemplates__idx___patch } from '../models/Body_update_template_doctemplates__idx___patch';
import type { DocTemplate } from '../models/DocTemplate';
import type { DocTemplateCreate } from '../models/DocTemplateCreate';
import type { DocTemplateFull } from '../models/DocTemplateFull';
import type { DocTemplateUpdate } from '../models/DocTemplateUpdate';
import type { TemplateList } from '../models/TemplateList';

export class DoctemplatesService {
  /**
   * Get List Template
   * Получение списка шаблонов документов
   *
   * tags - строка вида "tags1,tags2,tag". Теги указываются через запятую без пробелов. Поиск по включению и вывод
   * значений по логике ИЛИ (если есть хотя бы один тег, то запись выводим)
   *
   * page - строка, название (name) из таблицы pages.
   * area - строка, название (name) из таблицы areas.
   *
   * Поиск по area и page происходит по логике И (если есть совпадение по area то выовдим, если есть совпадение по
   * page выводим, если оба значения присутвуют, то выводим
   * @returns TemplateList Successful Response
   * @throws ApiError
   */
  public static getListTemplateDoctemplatesGet({
    token,
    tags,
    limit = 100,
    offset,
    page,
    area,
  }: {
    token: string;
    tags?: string;
    limit?: number;
    offset?: number;
    page?: string;
    area?: string;
  }): CancelablePromise<TemplateList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/doctemplates/',
      query: {
        token: token,
        tags: tags,
        limit: limit,
        offset: offset,
        page: page,
        area: area,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Add Template
   * Добавление нового шаблона
   *
   * tags - строка вида "tags1,tags2,tag". Теги указываются через запятую без пробелов
   *
   * areas_in - список id из таблицы areas
   * pages_in - список id из таблицы pages
   * Если значение не указвается, то необходимо ставить флаг "Send empty value"
   *
   * file - файл с контентом шаблона документа.
   * Если значение не указвается, то необходимо СНЯТЬ флаг "Send empty value"
   *
   * doc_type - необязательный параметр
   * @returns DocTemplateCreate Successful Response
   * @throws ApiError
   */
  public static addTemplateDoctemplatesPost({
    token,
    name,
    description,
    tags,
    docType,
    formData,
  }: {
    token: string;
    name: string;
    description?: string;
    tags?: string;
    docType?: number;
    formData?: Body_add_template_doctemplates__post;
  }): CancelablePromise<DocTemplateCreate> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/doctemplates/',
      query: {
        token: token,
        name: name,
        description: description,
        tags: tags,
        doc_type: docType,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Template
   * Получение шаблона по ID
   * @returns DocTemplateFull Successful Response
   * @throws ApiError
   */
  public static getTemplateDoctemplatesIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<DocTemplateFull> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/doctemplates/{idx}/',
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
   * Delete Template
   * Удаление шаблона по ID
   * @returns DocTemplate Successful Response
   * @throws ApiError
   */
  public static deleteTemplateDoctemplatesIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<DocTemplate> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/doctemplates/{idx}/',
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
   * Update Template
   * Обновление шаблона по ID
   * @returns DocTemplateUpdate Successful Response
   * @throws ApiError
   */
  public static updateTemplateDoctemplatesIdxPatch({
    idx,
    token,
    name,
    description,
    tags,
    userId,
    isDeleted,
    type,
    formData,
  }: {
    idx: number;
    token: string;
    name?: string;
    description?: string;
    tags?: string;
    userId?: number;
    isDeleted?: boolean;
    type?: number;
    formData?: Body_update_template_doctemplates__idx___patch;
  }): CancelablePromise<DocTemplateUpdate> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/doctemplates/{idx}/',
      path: {
        idx: idx,
      },
      query: {
        token: token,
        name: name,
        description: description,
        tags: tags,
        user_id: userId,
        is_deleted: isDeleted,
        type: type,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Template Data
   * Получение HTML-шаблона по ID шаблона
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getTemplateDataDoctemplatesIdxTemplateGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/doctemplates/{idx}/template',
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
