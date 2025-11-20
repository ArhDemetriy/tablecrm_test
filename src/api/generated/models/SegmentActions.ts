/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddRemoveTags } from './AddRemoveTags';
import type { AddRemoveTransaction } from './AddRemoveTransaction';
import type { CreateTags } from './CreateTags';
import type { DocsSalesTags } from './DocsSalesTags';
import type { HttpRequest } from './HttpRequest';
import type { TgNotificationsAction } from './TgNotificationsAction';
import type { TransformLoyalityCard } from './TransformLoyalityCard';
import type { WaNotification } from './WaNotification';

export type SegmentActions = {
  add_existed_tags?: AddRemoveTags;
  remove_tags?: AddRemoveTags;
  client_tags?: CreateTags;
  send_tg_notification?: TgNotificationsAction;
  add_docs_sales_tags?: DocsSalesTags;
  remove_docs_sales_tags?: DocsSalesTags;
  transform_loyality_card?: TransformLoyalityCard;
  add_loyality_transaction?: AddRemoveTransaction;
  send_wa_notification?: WaNotification;
  do_http_request?: HttpRequest;
};
