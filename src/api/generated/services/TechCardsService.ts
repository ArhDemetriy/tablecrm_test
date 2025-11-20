/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { TechCard } from '../models/TechCard';
import type { TechCardCreate } from '../models/TechCardCreate';
import type { TechCardItem } from '../models/TechCardItem';
import type { TechCardItemCreate } from '../models/TechCardItemCreate';
import type { TechCardResponse } from '../models/TechCardResponse';
import type { TechCardType } from '../models/TechCardType';

export class TechCardsService {
  /**
   * Get Tech Cards
   * @returns TechCard Successful Response
   * @throws ApiError
   */
  public static getTechCardsTechCardsGet({
    token,
    cardType,
    limit = 10,
    offset,
  }: {
    token: string;
    cardType?: TechCardType;
    limit?: number;
    offset?: number;
  }): CancelablePromise<Array<TechCard>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/tech_cards/',
      query: {
        token: token,
        card_type: cardType,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Tech Card
   * @returns TechCardResponse Successful Response
   * @throws ApiError
   */
  public static createTechCardTechCardsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: TechCardCreate;
  }): CancelablePromise<TechCardResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/tech_cards/',
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
   * Get Tech Card
   * @returns TechCard Successful Response
   * @throws ApiError
   */
  public static getTechCardTechCardsIdxGet({
    idx,
    token,
  }: {
    idx: string;
    token: string;
  }): CancelablePromise<TechCard> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/tech_cards/{idx}',
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
   * Update Tech Card
   * @returns TechCard Successful Response
   * @throws ApiError
   */
  public static updateTechCardTechCardsIdxPut({
    idx,
    token,
    requestBody,
  }: {
    idx: string;
    token: string;
    requestBody: TechCardCreate;
  }): CancelablePromise<TechCard> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/tech_cards/{idx}',
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
   * Delete Tech Card
   * @returns void
   * @throws ApiError
   */
  public static deleteTechCardTechCardsIdxDelete({
    idx,
    token,
  }: {
    idx: string;
    token: string;
  }): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/tech_cards/{idx}',
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
   * Get Tech Card Items
   * @returns TechCardItem Successful Response
   * @throws ApiError
   */
  public static getTechCardItemsTechCardsIdxItemsGet({
    idx,
    token,
  }: {
    idx: string;
    token: string;
  }): CancelablePromise<Array<TechCardItem>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/tech_cards/{idx}/items',
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
   * Add Item To Tech Card
   * @returns TechCardItem Successful Response
   * @throws ApiError
   */
  public static addItemToTechCardTechCardsIdxItemsPost({
    idx,
    token,
    requestBody,
  }: {
    idx: string;
    token: string;
    requestBody: TechCardItemCreate;
  }): CancelablePromise<TechCardItem> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/tech_cards/{idx}/items',
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
}
