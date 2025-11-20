/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AddNomenclatureToGroupModel } from '../models/AddNomenclatureToGroupModel';
import type { BaseNomenclatureGroup } from '../models/BaseNomenclatureGroup';
import type { DelNomenclatureFromGroupModel } from '../models/DelNomenclatureFromGroupModel';
import type { GroupModelWithNomenclaturesModel } from '../models/GroupModelWithNomenclaturesModel';
import type { NomenclatureGroupModel } from '../models/NomenclatureGroupModel';
import type { PatchNomenclatureGroupModel } from '../models/PatchNomenclatureGroupModel';
import type { ResponseAddNomenclatureToGroup } from '../models/ResponseAddNomenclatureToGroup';
import type { ResponseCreateNomenclatureGroupModel } from '../models/ResponseCreateNomenclatureGroupModel';
import type { ResponsePatchNomenclatureGroupModel } from '../models/ResponsePatchNomenclatureGroupModel';

export class NomenclatureGroupsService {
  /**
   *   Call
   * @returns NomenclatureGroupModel Successful Response
   * @throws ApiError
   */
  public static callNomenclatureGroupGet({
    token,
    offset,
    limit = 100,
  }: {
    token: string;
    offset?: number;
    limit?: number;
  }): CancelablePromise<Array<NomenclatureGroupModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/nomenclature/group',
      query: {
        token: token,
        offset: offset,
        limit: limit,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   *   Call
   * @returns ResponseCreateNomenclatureGroupModel Successful Response
   * @throws ApiError
   */
  public static callNomenclatureGroupPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: BaseNomenclatureGroup;
  }): CancelablePromise<ResponseCreateNomenclatureGroupModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/nomenclature/group',
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
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callNomenclatureGroupDelete({ token, id }: { token: string; id: number }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/nomenclature/group',
      query: {
        token: token,
        id: id,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   *   Call
   * @returns ResponsePatchNomenclatureGroupModel Successful Response
   * @throws ApiError
   */
  public static callNomenclatureGroupPatch({
    token,
    id,
    requestBody,
  }: {
    token: string;
    id: number;
    requestBody: PatchNomenclatureGroupModel;
  }): CancelablePromise<ResponsePatchNomenclatureGroupModel> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/nomenclature/group',
      query: {
        token: token,
        id: id,
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
   * @returns GroupModelWithNomenclaturesModel Successful Response
   * @throws ApiError
   */
  public static callNomenclatureGroupGroupIdGet({
    groupId,
    token,
  }: {
    groupId: number;
    token: string;
  }): CancelablePromise<GroupModelWithNomenclaturesModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/nomenclature/group/{group_id}',
      path: {
        group_id: groupId,
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
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callNomenclatureGroupGroupIdSelectMainPatch({
    groupId,
    token,
    nomenclatureId,
  }: {
    groupId: number;
    token: string;
    nomenclatureId: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/nomenclature/group/{group_id}/select_main',
      path: {
        group_id: groupId,
      },
      query: {
        token: token,
        nomenclature_id: nomenclatureId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   *   Call
   * @returns ResponseAddNomenclatureToGroup Successful Response
   * @throws ApiError
   */
  public static callNomenclatureGroupAddPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: AddNomenclatureToGroupModel;
  }): CancelablePromise<ResponseAddNomenclatureToGroup> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/nomenclature/group/add',
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
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callNomenclatureGroupDelDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: DelNomenclatureFromGroupModel;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/nomenclature/group/del',
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
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callNomenclatureGroupGroupIdAttrGet({
    groupId,
    token,
  }: {
    groupId: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/nomenclature/group/{group_id}/attr',
      path: {
        group_id: groupId,
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
