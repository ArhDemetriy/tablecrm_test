/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { ReportData } from '../models/ReportData';

export class ReportsService {
  /**
   * Get Sales Report
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getSalesReportReportsSalesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ReportData;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/reports/sales/',
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
   * Get Balances Report
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getBalancesReportReportsBalancesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ReportData;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/reports/balances/',
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
