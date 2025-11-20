/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Contract } from '../models/Contract';
import type { ContractCreateMass } from '../models/ContractCreateMass';
import type { ContractEdit } from '../models/ContractEdit';
import type { ContractList } from '../models/ContractList';
import type { ContractListGet } from '../models/ContractListGet';

export class ContractsService {
  /**
   * Get Contract By Id
   * Получение контракта по ID
   * @returns Contract Successful Response
   * @throws ApiError
   */
  public static getContractByIdContractsIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Contract> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contracts/{idx}/',
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
   * Delete Contract
   * Удаление контракта
   * @returns Contract Successful Response
   * @throws ApiError
   */
  public static deleteContractContractsIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Contract> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contracts/{idx}/',
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
   * Edit Contract
   * Редактирование контракта
   * @returns Contract Successful Response
   * @throws ApiError
   */
  public static editContractContractsIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: ContractEdit;
  }): CancelablePromise<Contract> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/contracts/{idx}/',
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
   * Get Contracts
   * Получение списка контрактов
   * @returns ContractListGet Successful Response
   * @throws ApiError
   */
  public static getContractsContractsGet({
    token,
    name,
    limit = 100,
    offset,
  }: {
    token: string;
    name?: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<ContractListGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contracts/',
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
   * New Contract
   * Создание контракта
   * @returns ContractList Successful Response
   * @throws ApiError
   */
  public static newContractContractsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ContractCreateMass;
  }): CancelablePromise<ContractList> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contracts/',
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
