/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { PaymentCreateModelView } from '../models/PaymentCreateModelView';
import type { PaymentWebhookEventModel } from '../models/PaymentWebhookEventModel';
import type { WebhookViewModel } from '../models/WebhookViewModel';

export class YookassaService {
  /**
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callYookassaMeGet({ token, warehouse }: { token: string; warehouse: number }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/yookassa/me',
      query: {
        token: token,
        warehouse: warehouse,
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
  public static callYookassaPaymentsFromSalesGet({
    token,
    docSalesId,
  }: {
    token: string;
    docSalesId: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/yookassa/payments/from_sales',
      query: {
        token: token,
        doc_sales_id: docSalesId,
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
  public static callYookassaWebhookEventPost({
    requestBody,
  }: {
    requestBody: PaymentWebhookEventModel;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/yookassa/webhook/event',
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
  public static callYookassaWebhookDeleteDelete({
    token,
    warehouse,
    webhookId,
  }: {
    token: string;
    warehouse: number;
    webhookId: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/yookassa/webhook/delete',
      query: {
        token: token,
        warehouse: warehouse,
        webhook_id: webhookId,
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
  public static callYookassaWebhookListGet({
    token,
    warehouse,
  }: {
    token: string;
    warehouse: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/yookassa/webhook/list',
      query: {
        token: token,
        warehouse: warehouse,
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
  public static callYookassaWebhookCreatePost({
    token,
    warehouse,
    requestBody,
  }: {
    token: string;
    warehouse: number;
    requestBody: WebhookViewModel;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/yookassa/webhook/create',
      query: {
        token: token,
        warehouse: warehouse,
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
  public static callYookassaInstallListGet({ token }: { token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/yookassa/install/list',
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
  public static callYookassaEventsGet({ code, state }: { code: string; state: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/yookassa/events',
      query: {
        code: code,
        state: state,
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
  public static callYookassaRevokeGet({
    token,
    warehouse,
  }: {
    token: string;
    warehouse: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/yookassa/revoke',
      query: {
        token: token,
        warehouse: warehouse,
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
  public static callYookassaPaymentsPost({
    token,
    warehouse,
    requestBody,
    paymentCrmId,
    docSalesId,
  }: {
    token: string;
    warehouse: number;
    requestBody: PaymentCreateModelView;
    paymentCrmId?: number;
    docSalesId?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/yookassa/payments',
      query: {
        token: token,
        warehouse: warehouse,
        payment_crm_id: paymentCrmId,
        doc_sales_id: docSalesId,
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
  public static callYookassaInstallGet({
    token,
    warehouse,
  }: {
    token: string;
    warehouse: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/yookassa/install',
      query: {
        token: token,
        warehouse: warehouse,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
