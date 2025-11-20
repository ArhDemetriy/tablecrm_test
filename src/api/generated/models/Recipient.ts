/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TgNotificationsConditions } from './TgNotificationsConditions';

export type Recipient = {
  user_tag: string;
  shift_status?: 'on_shift' | 'off_shift' | 'on_break';
  conditions?: TgNotificationsConditions;
};
