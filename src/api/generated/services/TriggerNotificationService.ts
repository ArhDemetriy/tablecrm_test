/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TriggerNotificationService {
  /**
   * Test
   * @returns any Successful Response
   * @throws ApiError
   */
  public static testTriggerNotificationsTestGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/trigger_notifications/test',
    });
  }
}
