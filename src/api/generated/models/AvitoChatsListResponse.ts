/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvitoChatListItem } from './AvitoChatListItem';

export type AvitoChatsListResponse = {
  success: boolean;
  total: number;
  chats: Array<AvitoChatListItem>;
  created_in_db: number;
  updated_in_db: number;
};
