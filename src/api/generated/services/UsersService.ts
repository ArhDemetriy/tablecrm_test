/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CBUsers } from '../models/CBUsers';
import type { CBUsersListShort } from '../models/CBUsersListShort';
import type { UserPermissionResponse } from '../models/UserPermissionResponse';
import type { UserPermissionUpdate } from '../models/UserPermissionUpdate';
import type { UserPermissionsResult } from '../models/UserPermissionsResult';
import type { UserShiftSettings } from '../models/UserShiftSettings';
import type { UserShiftSettingsResponse } from '../models/UserShiftSettingsResponse';

export class UsersService {
  /**
   * Get User By Token Route
   * @returns CBUsers Successful Response
   * @throws ApiError
   */
  public static getUserByTokenRouteUsersGet({ token }: { token: string }): CancelablePromise<CBUsers> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get User List
   * @returns CBUsersListShort Successful Response
   * @throws ApiError
   */
  public static getUserListUsersListGet({
    token,
    name,
    limit = 100,
    offset,
  }: {
    token: string;
    name?: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<CBUsersListShort> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/list/',
      query: {
        token: token,
        name: name,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Set User Permissions
   * Установка прав для пользователя
   * @returns UserPermissionResponse Successful Response
   * @throws ApiError
   */
  public static setUserPermissionsUsersPermissionsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: UserPermissionUpdate;
  }): CancelablePromise<UserPermissionResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/users/permissions/',
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
   * Get User Permissions
   * Получение прав пользователя
   * @returns UserPermissionsResult Successful Response
   * @throws ApiError
   */
  public static getUserPermissionsUsersPermissionsUserIdGet({
    userId,
    token,
  }: {
    userId: number;
    token: string;
  }): CancelablePromise<UserPermissionsResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/permissions/{user_id}',
      path: {
        user_id: userId,
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
   * Get My Permissions
   * Получение прав текущего пользователя
   * @returns UserPermissionsResult Successful Response
   * @throws ApiError
   */
  public static getMyPermissionsUsersPermissionsMeGet({
    token,
  }: {
    token: string;
  }): CancelablePromise<UserPermissionsResult> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/permissions/me/',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update User Shift Settings
   * Включить/выключить работу по сменам для пользователя
   * @returns UserShiftSettingsResponse Successful Response
   * @throws ApiError
   */
  public static updateUserShiftSettingsUsersUserIdShiftSettingsPatch({
    userId,
    token,
    requestBody,
  }: {
    userId: number;
    token: string;
    requestBody: UserShiftSettings;
  }): CancelablePromise<UserShiftSettingsResponse> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/users/{user_id}/shift-settings',
      path: {
        user_id: userId,
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
