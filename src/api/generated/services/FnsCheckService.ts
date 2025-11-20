/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Body_new_cheque_cheques__post } from '../models/Body_new_cheque_cheques__post';
import type { Cheque } from '../models/Cheque';
import type { ChequesGet } from '../models/ChequesGet';

export class FnsCheckService {
  /**
   * Get Cheque By Id
   * Получение чека по ID
   * @returns Cheque Successful Response
   * @throws ApiError
   */
  public static getChequeByIdChequesIdGet({ id, token }: { id: number; token: string }): CancelablePromise<Cheque> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/cheques/{id}/',
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
   * Get Cheques
   * Получение чеков кассы
   * @returns ChequesGet Successful Response
   * @throws ApiError
   */
  public static getChequesChequesGet({
    token,
    limit = 100,
    offset,
    datefrom,
    dateto,
    user,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    datefrom?: number;
    dateto?: number;
    user?: number;
  }): CancelablePromise<ChequesGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/cheques/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        datefrom: datefrom,
        dateto: dateto,
        user: user,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * New Cheque
   * Создание чека
   * @returns Cheque Successful Response
   * @throws ApiError
   */
  public static newChequeChequesPost({
    token,
    rawQr = '',
    formData,
  }: {
    token: string;
    rawQr?: string;
    formData?: Body_new_cheque_cheques__post;
  }): CancelablePromise<Cheque> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/cheques/',
      query: {
        token: token,
        raw_qr: rawQr,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
