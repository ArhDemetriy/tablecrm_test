/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Body_add_icon_to_project_projects_add_icon__put } from '../models/Body_add_icon_to_project_projects_add_icon__put';
import type { GetProjects } from '../models/GetProjects';
import type { Project } from '../models/Project';
import type { ProjectCreate } from '../models/ProjectCreate';
import type { ProjectEdit } from '../models/ProjectEdit';

export class ProjectsService {
  /**
   * Get Project By Id
   * Получение проекта по ID
   * @returns Project Successful Response
   * @throws ApiError
   */
  public static getProjectByIdProjectsIdGet({ id, token }: { id: number; token: string }): CancelablePromise<Project> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/projects/{id}/',
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
   * Get Projects
   * Получение проектов кассы
   * @returns GetProjects Successful Response
   * @throws ApiError
   */
  public static getProjectsProjectsGet({
    token,
    limit = 100,
    offset,
    sort = 'created_at:desc',
    externalId,
    name,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    sort?: string;
    externalId?: string;
    name?: string;
  }): CancelablePromise<GetProjects> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/projects/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        sort: sort,
        external_id: externalId,
        name: name,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Edit Project
   * Обновление проекта
   * @returns any Successful Response
   * @throws ApiError
   */
  public static editProjectProjectsPut({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ProjectEdit;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/projects/',
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
   * New Project
   * Создание проекта
   * @returns any Successful Response
   * @throws ApiError
   */
  public static newProjectProjectsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ProjectCreate;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/projects/',
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
   * Add Icon To Project
   * @returns any Successful Response
   * @throws ApiError
   */
  public static addIconToProjectProjectsAddIconPut({
    token,
    projId,
    formData,
  }: {
    token: string;
    projId: number;
    formData: Body_add_icon_to_project_projects_add_icon__put;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/projects/add_icon/',
      query: {
        token: token,
        proj_id: projId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
