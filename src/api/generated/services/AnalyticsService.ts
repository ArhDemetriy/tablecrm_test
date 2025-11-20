/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { PaymentsAnalytics } from '../models/PaymentsAnalytics';

export class AnalyticsService {
  /**
   * Analytics
   * Аналитика платежей
   * @returns PaymentsAnalytics Successful Response
   * @throws ApiError
   */
  public static analyticsAnalyticsGet({
    token,
    entity = 'payments',
    offset,
    limit = 100,
    sort = 'percentage:desc',
    type = 'incoming, outgoing',
    datefrom,
    dateto,
    payboxId,
    status,
  }: {
    token: string;
    entity?: string;
    offset?: number;
    limit?: number;
    sort?: string;
    type?: string;
    datefrom?: number;
    dateto?: number;
    payboxId?: string;
    status?: string;
  }): CancelablePromise<PaymentsAnalytics> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/analytics/',
      query: {
        token: token,
        entity: entity,
        offset: offset,
        limit: limit,
        sort: sort,
        type: type,
        datefrom: datefrom,
        dateto: dateto,
        paybox_id: payboxId,
        status: status,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Analytics
   * @returns any Successful Response
   * @throws ApiError
   */
  public static analyticsAnalyticsCardsGet({
    token,
    dateFrom,
    dateTo,
    userId,
  }: {
    token: string;
    dateFrom: number;
    dateTo: number;
    userId?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/analytics_cards/',
      query: {
        token: token,
        date_from: dateFrom,
        date_to: dateTo,
        user_id: userId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
