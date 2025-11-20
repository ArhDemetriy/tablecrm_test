/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { LoyalityCard } from '../models/LoyalityCard';
import type { LoyalityCardCreateMass } from '../models/LoyalityCardCreateMass';
import type { LoyalityCardEdit } from '../models/LoyalityCardEdit';
import type { LoyalityCardGet } from '../models/LoyalityCardGet';
import type { LoyalityCardsList } from '../models/LoyalityCardsList';
import type { api__loyality_cards__schemas__CountRes } from '../models/api__loyality_cards__schemas__CountRes';

export class LoyalityCardsService {
  /**
   * Get Loyality Card By Id
   * Получение карты по ID
   * @returns LoyalityCardGet Successful Response
   * @throws ApiError
   */
  public static getLoyalityCardByIdLoyalityCardsIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<LoyalityCardGet> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/loyality_cards/{idx}/',
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
   * Удаление карт
   * @returns LoyalityCard Successful Response
   * @throws ApiError
   */
  public static deleteLoyalityTransactionLoyalityCardsIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<LoyalityCard> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/loyality_cards/{idx}/',
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
   * Редактирование карт
   * @returns LoyalityCard Successful Response
   * @throws ApiError
   */
  public static editLoyalityTransactionLoyalityCardsIdxPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: LoyalityCardEdit;
  }): CancelablePromise<LoyalityCard> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/loyality_cards/{idx}/',
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
   * Get Cards
   * Получение списка карт
   * @returns api__loyality_cards__schemas__CountRes Successful Response
   * @throws ApiError
   */
  public static getCardsLoyalityCardsGet({
    token,
    limit = 100,
    offset,
    sort = 'created_at:desc',
    cardNumber,
    balance,
    tags,
    income,
    outcome,
    cashbackPercent,
    minimalChecqueAmount,
    maxPercentage,
    createdById,
    startPeriodFrom,
    endPeriodFrom,
    startPeriodTo,
    endPeriodTo,
    createdAtFrom,
    createdAtTo,
    updatedAtFrom,
    updatedAtTo,
    contragentName,
    phoneNumber,
    organizationName,
    statusCard,
    updatedAtGte,
    updatedAtLte,
    createdAtGte,
    createdAtLte,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    sort?: string;
    cardNumber?: number;
    balance?: number;
    tags?: string;
    income?: number;
    outcome?: number;
    cashbackPercent?: number;
    minimalChecqueAmount?: number;
    maxPercentage?: number;
    createdById?: number;
    startPeriodFrom?: number;
    endPeriodFrom?: number;
    startPeriodTo?: number;
    endPeriodTo?: number;
    createdAtFrom?: number;
    createdAtTo?: number;
    updatedAtFrom?: number;
    updatedAtTo?: number;
    contragentName?: string;
    phoneNumber?: string;
    organizationName?: string;
    statusCard?: boolean;
    updatedAtGte?: number;
    updatedAtLte?: number;
    createdAtGte?: number;
    createdAtLte?: number;
  }): CancelablePromise<api__loyality_cards__schemas__CountRes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/loyality_cards/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        sort: sort,
        card_number: cardNumber,
        balance: balance,
        tags: tags,
        income: income,
        outcome: outcome,
        cashback_percent: cashbackPercent,
        minimal_checque_amount: minimalChecqueAmount,
        max_percentage: maxPercentage,
        created_by_id: createdById,
        start_period_from: startPeriodFrom,
        end_period_from: endPeriodFrom,
        start_period_to: startPeriodTo,
        end_period_to: endPeriodTo,
        created_at_from: createdAtFrom,
        created_at_to: createdAtTo,
        updated_at_from: updatedAtFrom,
        updated_at_to: updatedAtTo,
        contragent_name: contragentName,
        phone_number: phoneNumber,
        organization_name: organizationName,
        status_card: statusCard,
        updated_at__gte: updatedAtGte,
        updated_at__lte: updatedAtLte,
        created_at__gte: createdAtGte,
        created_at__lte: createdAtLte,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * New Loyality Card
   * Создание карт
   * @returns LoyalityCardsList Successful Response
   * @throws ApiError
   */
  public static newLoyalityCardLoyalityCardsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: LoyalityCardCreateMass;
  }): CancelablePromise<LoyalityCardsList> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/loyality_cards/',
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
