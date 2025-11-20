/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { LoyalityTransaction } from '../models/LoyalityTransaction';
import type { LoyalityTransactionCreate } from '../models/LoyalityTransactionCreate';
import type { LoyalityTransactionEdit } from '../models/LoyalityTransactionEdit';
import type { api__loyality_transactions__schemas__CountRes } from '../models/api__loyality_transactions__schemas__CountRes';

export class LoyalityTransactionsService {
  /**
   * Get Loyality Transaction By Id
   * Получение транзакции по ID
   * @returns LoyalityTransaction Successful Response
   * @throws ApiError
   */
  public static getLoyalityTransactionByIdLoyalityTransactionsIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<LoyalityTransaction> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/loyality_transactions/{idx}/',
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
   * Delete Loyality Transaction
   * Удаление транзакций
   * @returns LoyalityTransaction Successful Response
   * @throws ApiError
   */
  public static deleteLoyalityTransactionLoyalityTransactionsIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<LoyalityTransaction> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/loyality_transactions/{idx}/',
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
   * Edit Loyality Transaction
   * Редактирование транзакций
   * @returns LoyalityTransaction Successful Response
   * @throws ApiError
   */
  public static editLoyalityTransactionLoyalityTransactionsIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: LoyalityTransactionEdit;
  }): CancelablePromise<LoyalityTransaction> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/loyality_transactions/{idx}/',
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
   * Get Transactions
   * Получение списка транзакций
   * @returns api__loyality_transactions__schemas__CountRes Successful Response
   * @throws ApiError
   */
  public static getTransactionsLoyalityTransactionsGet({
    token,
    limit = 100,
    offset,
    type,
    amount,
    loyalityCardNumber,
    tags,
    name,
    description,
    datedFrom,
    datedTo,
    status,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    type?: string;
    amount?: number;
    loyalityCardNumber?: number;
    tags?: string;
    name?: string;
    description?: string;
    datedFrom?: number;
    datedTo?: number;
    status?: boolean;
  }): CancelablePromise<api__loyality_transactions__schemas__CountRes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/loyality_transactions/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        type: type,
        amount: amount,
        loyality_card_number: loyalityCardNumber,
        tags: tags,
        name: name,
        description: description,
        dated_from: datedFrom,
        dated_to: datedTo,
        status: status,
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
  public static callLoyalityTransactionsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: LoyalityTransactionCreate | Array<LoyalityTransactionCreate>;
  }): CancelablePromise<LoyalityTransaction | Array<LoyalityTransaction>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/loyality_transactions/',
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
