/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { ChainClientRequest } from '../models/ChainClientRequest';
import type { ChannelCreate } from '../models/ChannelCreate';
import type { ChannelResponse } from '../models/ChannelResponse';
import type { ChannelUpdate } from '../models/ChannelUpdate';
import type { ChatCreate } from '../models/ChatCreate';
import type { ChatResponse } from '../models/ChatResponse';
import type { ChatUpdate } from '../models/ChatUpdate';
import type { MessageCreate } from '../models/MessageCreate';
import type { MessageResponse } from '../models/MessageResponse';
import type { MessagesList } from '../models/MessagesList';

export class ChatsService {
  /**
   * Get Channels
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getChannelsChatsChannelsGet({
    token,
    skip,
    limit = 100,
  }: {
    token: string;
    skip?: number;
    limit?: number;
  }): CancelablePromise<Array<any>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/channels/',
      query: {
        token: token,
        skip: skip,
        limit: limit,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Channel
   * Create a new channel (owner only)
   * @returns ChannelResponse Successful Response
   * @throws ApiError
   */
  public static createChannelChatsChannelsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ChannelCreate;
  }): CancelablePromise<ChannelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/chats/channels/',
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
   * Get Channel
   * @returns ChannelResponse Successful Response
   * @throws ApiError
   */
  public static getChannelChatsChannelsChannelIdGet({
    channelId,
    token,
  }: {
    channelId: number;
    token: string;
  }): CancelablePromise<ChannelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/channels/{channel_id}',
      path: {
        channel_id: channelId,
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
   * Update Channel
   * Update channel (owner only)
   * @returns ChannelResponse Successful Response
   * @throws ApiError
   */
  public static updateChannelChatsChannelsChannelIdPut({
    channelId,
    token,
    requestBody,
  }: {
    channelId: number;
    token: string;
    requestBody: ChannelUpdate;
  }): CancelablePromise<ChannelResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/chats/channels/{channel_id}',
      path: {
        channel_id: channelId,
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
   * Delete Channel
   * Delete channel (owner only, soft-delete)
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteChannelChatsChannelsChannelIdDelete({
    channelId,
    token,
  }: {
    channelId: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/chats/channels/{channel_id}',
      path: {
        channel_id: channelId,
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
   * Get Chats
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getChatsChatsChatsGet({
    token,
    channelId,
    contragentId,
    status,
    search,
    createdFrom,
    createdTo,
    updatedFrom,
    updatedTo,
    sortBy,
    sortOrder = 'desc',
    skip,
    limit = 100,
  }: {
    token: string;
    channelId?: number;
    contragentId?: number;
    status?: string;
    /**
     * Поиск по имени, телефону или external_chat_id
     */
    search?: string;
    /**
     * Фильтр: дата создания от (ISO 8601)
     */
    createdFrom?: string;
    /**
     * Фильтр: дата создания до (ISO 8601)
     */
    createdTo?: string;
    /**
     * Фильтр: дата обновления от (ISO 8601)
     */
    updatedFrom?: string;
    /**
     * Фильтр: дата обновления до (ISO 8601)
     */
    updatedTo?: string;
    /**
     * Сортировка по полю: created_at, updated_at, last_message_time, name
     */
    sortBy?: string;
    /**
     * Порядок сортировки: asc или desc
     */
    sortOrder?: string;
    skip?: number;
    limit?: number;
  }): CancelablePromise<Array<any>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/chats/',
      query: {
        token: token,
        channel_id: channelId,
        contragent_id: contragentId,
        status: status,
        search: search,
        created_from: createdFrom,
        created_to: createdTo,
        updated_from: updatedFrom,
        updated_to: updatedTo,
        sort_by: sortBy,
        sort_order: sortOrder,
        skip: skip,
        limit: limit,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Chat
   * Create a new chat (cashbox_id from token)
   * @returns ChatResponse Successful Response
   * @throws ApiError
   */
  public static createChatChatsChatsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: ChatCreate;
  }): CancelablePromise<ChatResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/chats/chats/',
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
   * Get Chat
   * Get chat by ID (must belong to user's cashbox)
   * @returns ChatResponse Successful Response
   * @throws ApiError
   */
  public static getChatChatsChatsChatIdGet({
    chatId,
    token,
  }: {
    chatId: number;
    token: string;
  }): CancelablePromise<ChatResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/chats/{chat_id}',
      path: {
        chat_id: chatId,
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
   * Update Chat
   * Update chat (must belong to user's cashbox)
   * @returns ChatResponse Successful Response
   * @throws ApiError
   */
  public static updateChatChatsChatsChatIdPut({
    chatId,
    token,
    requestBody,
  }: {
    chatId: number;
    token: string;
    requestBody: ChatUpdate;
  }): CancelablePromise<ChatResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/chats/chats/{chat_id}',
      path: {
        chat_id: chatId,
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
   * Delete Chat
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteChatChatsChatsChatIdDelete({
    chatId,
    token,
  }: {
    chatId: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/chats/chats/{chat_id}',
      path: {
        chat_id: chatId,
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
   * Create Message
   * Create a new message
   * @returns MessageResponse Successful Response
   * @throws ApiError
   */
  public static createMessageChatsMessagesPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: MessageCreate;
  }): CancelablePromise<MessageResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/chats/messages/',
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
   * Get Message
   * Get message by ID (must belong to user's cashbox)
   * @returns MessageResponse Successful Response
   * @throws ApiError
   */
  public static getMessageChatsMessagesMessageIdGet({
    messageId,
    token,
  }: {
    messageId: number;
    token: string;
  }): CancelablePromise<MessageResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/messages/{message_id}',
      path: {
        message_id: messageId,
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
   * Delete Message
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteMessageChatsMessagesMessageIdDelete({
    messageId,
    token,
  }: {
    messageId: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/chats/messages/{message_id}',
      path: {
        message_id: messageId,
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
   * Get Chat Messages
   * Get messages from chat (must belong to user's cashbox)
   * @returns MessagesList Successful Response
   * @throws ApiError
   */
  public static getChatMessagesChatsMessagesChatChatIdGet({
    chatId,
    token,
    skip,
    limit = 100,
  }: {
    chatId: number;
    token: string;
    skip?: number;
    limit?: number;
  }): CancelablePromise<MessagesList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/messages/chat/{chat_id}',
      path: {
        chat_id: chatId,
      },
      query: {
        token: token,
        skip: skip,
        limit: limit,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Chat Files
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getChatFilesChatsChatsChatIdFilesGet({
    chatId,
    token,
  }: {
    chatId: number;
    token: string;
  }): CancelablePromise<Array<any>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/chats/{chat_id}/files/',
      path: {
        chat_id: chatId,
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
   * Get Message Files
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getMessageFilesChatsMessagesMessageIdFilesGet({
    messageId,
    token,
  }: {
    messageId: number;
    token: string;
  }): CancelablePromise<Array<any>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/chats/messages/{message_id}/files/',
      path: {
        message_id: messageId,
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
   * Chain Client Endpoint
   * @returns any Successful Response
   * @throws ApiError
   */
  public static chainClientEndpointChatsChatsChatIdChainClientPut({
    chatId,
    token,
    requestBody,
    messageId,
  }: {
    chatId: number;
    token: string;
    requestBody: ChainClientRequest;
    messageId?: number;
  }): CancelablePromise<Record<string, any>> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/chats/chats/{chat_id}/chain_client/',
      path: {
        chat_id: chatId,
      },
      query: {
        token: token,
        message_id: messageId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
