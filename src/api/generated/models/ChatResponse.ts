/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChatResponse = {
  id: number;
  channel_id: number;
  contragent_id?: number;
  external_chat_id: string;
  phone?: string;
  name?: string;
  status: string;
  assigned_operator_id?: number;
  first_message_time?: string;
  first_response_time_seconds?: number;
  last_message_time?: string;
  last_response_time_seconds?: number;
  created_at: string;
  updated_at: string;
  last_message_preview?: string;
  unread_count?: number;
  channel_name?: string;
  channel_icon?: string;
  channel_type?: string;
  client_avatar?: string;
};
