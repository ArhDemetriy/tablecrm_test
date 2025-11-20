/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TriggerTime } from './TriggerTime';
import type { TriggerType } from './TriggerType';

export type CreateTrigger = {
  name: string;
  amo_bots_id: number;
  type: TriggerType;
  time_variant: TriggerTime;
  time: number;
  active?: boolean;
};
