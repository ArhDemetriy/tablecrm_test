/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AvitoWebhookResponse } from '../models/AvitoWebhookResponse';

export class AvitoWebhookService {
  /**
   * Receive Avito Webhook Default
   * @returns AvitoWebhookResponse Successful Response
   * @throws ApiError
   */
  public static receiveAvitoWebhookDefaultAvitoHookPost(): CancelablePromise<AvitoWebhookResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/avito/hook',
    });
  }
}
