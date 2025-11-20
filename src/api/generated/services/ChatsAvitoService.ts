/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AvitoChatsListResponse } from '../models/AvitoChatsListResponse';
import type { AvitoConnectResponse } from '../models/AvitoConnectResponse';
import type { AvitoCredentialsCreate } from '../models/AvitoCredentialsCreate';
import type { AvitoMessagesResponse } from '../models/AvitoMessagesResponse';
import type { AvitoSyncResponse } from '../models/AvitoSyncResponse';
import type { AvitoWebhookRegisterRequest } from '../models/AvitoWebhookRegisterRequest';
import type { AvitoWebhookRegisterResponse } from '../models/AvitoWebhookRegisterResponse';
import type { AvitoWebhookUpdateResponse } from '../models/AvitoWebhookUpdateResponse';

export class ChatsAvitoService {
  /**
   * Get Avito Api Info
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getAvitoApiInfoChatsAvitoGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/avito/',
    });
  }
  /**
   * Connect Avito Channel
   * @returns AvitoConnectResponse Successful Response
   * @throws ApiError
   */
  public static connectAvitoChannelChatsAvitoConnectPost({
    requestBody,
    token,
  }: {
    requestBody: AvitoCredentialsCreate;
    /**
     * User authentication token
     */
    token?: string;
  }): CancelablePromise<AvitoConnectResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/chats/avito/connect',
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
   * Get Avito Chats
   * @returns AvitoChatsListResponse Successful Response
   * @throws ApiError
   */
  public static getAvitoChatsChatsAvitoChatsGet({
    limit = 50,
    offset,
    unreadOnly = false,
    token,
  }: {
    /**
     * Количество чатов для получения
     */
    limit?: number;
    /**
     * Смещение для пагинации
     */
    offset?: number;
    /**
     * Только непрочитанные чаты
     */
    unreadOnly?: boolean;
    /**
     * User authentication token
     */
    token?: string;
  }): CancelablePromise<AvitoChatsListResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/avito/chats',
      query: {
        limit: limit,
        offset: offset,
        unread_only: unreadOnly,
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Avito Chat Messages
   * @returns AvitoMessagesResponse Successful Response
   * @throws ApiError
   */
  public static getAvitoChatMessagesChatsAvitoChatsChatIdMessagesGet({
    chatId,
    limit = 50,
    offset,
    token,
  }: {
    chatId: string;
    /**
     * Количество сообщений для получения
     */
    limit?: number;
    /**
     * Смещение для пагинации
     */
    offset?: number;
    /**
     * User authentication token
     */
    token?: string;
  }): CancelablePromise<AvitoMessagesResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/avito/chats/{chat_id}/messages',
      path: {
        chat_id: chatId,
      },
      query: {
        limit: limit,
        offset: offset,
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Sync Avito Messages
   * @returns AvitoSyncResponse Successful Response
   * @throws ApiError
   */
  public static syncAvitoMessagesChatsAvitoSyncPost({
    token,
  }: {
    /**
     * User authentication token
     */
    token?: string;
  }): CancelablePromise<AvitoSyncResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/chats/avito/sync',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Avito Status
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getAvitoStatusChatsAvitoStatusGet({
    token,
  }: {
    /**
     * User authentication token
     */
    token?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/avito/status',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Register Avito Webhook
   * @returns AvitoWebhookRegisterResponse Successful Response
   * @throws ApiError
   */
  public static registerAvitoWebhookChatsAvitoWebhooksRegisterPost({
    requestBody,
    token,
  }: {
    requestBody: AvitoWebhookRegisterRequest;
    /**
     * User authentication token
     */
    token?: string;
  }): CancelablePromise<AvitoWebhookRegisterResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/chats/avito/webhooks/register',
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
   * Get Avito Webhooks
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getAvitoWebhooksChatsAvitoWebhooksListGet({
    token,
  }: {
    /**
     * User authentication token
     */
    token?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/avito/webhooks/list',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update All Avito Webhooks
   * @returns AvitoWebhookUpdateResponse Successful Response
   * @throws ApiError
   */
  public static updateAllAvitoWebhooksChatsAvitoWebhooksUpdateAllPost({
    token,
  }: {
    /**
     * User authentication token
     */
    token?: string;
  }): CancelablePromise<AvitoWebhookUpdateResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/chats/avito/webhooks/update-all',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
