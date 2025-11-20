/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Recipient } from './Recipient';

export type TgNotificationsAction = {
  trigger_on_new?: boolean;
  message: string;
  user_tag?: string;
  shift_status?: 'on_shift' | 'off_shift' | 'on_break';
  send_to?: 'picker' | 'courier';
  recipients?: Array<Recipient>;
};
