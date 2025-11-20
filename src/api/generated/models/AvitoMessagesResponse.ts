/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvitoMessageItem } from './AvitoMessageItem';

export type AvitoMessagesResponse = {
  success: boolean;
  chat_id: number;
  external_chat_id: string;
  total: number;
  messages: Array<AvitoMessageItem>;
  saved_to_db: number;
};
