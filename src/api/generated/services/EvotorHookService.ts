/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { EvotorInstallEvent } from '../models/EvotorInstallEvent';
import type { EvotorUserToken } from '../models/EvotorUserToken';
import type { ListEvotorNomenclature } from '../models/ListEvotorNomenclature';
import type { api__docs_sales__schemas__CreateMass } from '../models/api__docs_sales__schemas__CreateMass';

export class EvotorHookService {
  /**
   * Events
   * @returns any Successful Response
   * @throws ApiError
   */
  public static eventsEvotorEventsPut(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/evotor/events',
    });
  }
  /**
   * Events
   * @returns any Successful Response
   * @throws ApiError
   */
  public static eventsEvotorEventsPost({ requestBody }: { requestBody: EvotorInstallEvent }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/evotor/events',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Integration On
   * Установка связи аккаунта пользователя и интеграции
   * @returns any Successful Response
   * @throws ApiError
   */
  public static integrationOnEvotorIntegrationOnGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/evotor/integration/on',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Integration Off
   * Удаление связи аккаунта пользователя и интеграции
   * @returns any Successful Response
   * @throws ApiError
   */
  public static integrationOffEvotorIntegrationOffGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/evotor/integration/off',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Install
   * @returns any Successful Response
   * @throws ApiError
   */
  public static installEvotorIntegrationInstallGet({
    token,
    evotorToken,
    idIntegration,
  }: {
    token: string;
    evotorToken: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/evotor/integration/install',
      query: {
        token: token,
        evotor_token: evotorToken,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Stores
   * @returns any Successful Response
   * @throws ApiError
   */
  public static storesEvotorStoresGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/evotor/stores',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Check
   * Проверка установлена или нет интеграция у клиента
   * @returns any Successful Response
   * @throws ApiError
   */
  public static checkEvotorIntegrationCheckGet({
    token,
    idIntegration,
  }: {
    token: string;
    idIntegration: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/evotor/integration/check',
      query: {
        token: token,
        id_integration: idIntegration,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Events
   * @returns any Successful Response
   * @throws ApiError
   */
  public static eventsEvotorNomenclaturePost({
    requestBody,
  }: {
    requestBody: ListEvotorNomenclature;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/evotor/nomenclature',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * User Token
   * @returns any Successful Response
   * @throws ApiError
   */
  public static userTokenEvotorUserTokenPost({
    requestBody,
  }: {
    requestBody: EvotorUserToken;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/evotor/user/token',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Loyality Cards
   * @returns any Successful Response
   * @throws ApiError
   */
  public static loyalityCardsEvotorLoyalityCardsGet({
    limit = 100,
    offset,
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
    limit?: number;
    offset?: number;
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
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/evotor/loyality_cards/',
      query: {
        limit: limit,
        offset: offset,
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
   * Loyality Cards
   * @returns any Successful Response
   * @throws ApiError
   */
  public static loyalityCardsEvotorLoyalitySettingsGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/evotor/loyality_settings/',
    });
  }
  /**
   * Create Doc Sales
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createDocSalesEvotorDocsSalesPost({
    requestBody,
    generateOut = true,
  }: {
    requestBody: api__docs_sales__schemas__CreateMass;
    generateOut?: boolean;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/evotor/docs_sales/',
      query: {
        generate_out: generateOut,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
