/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SegmentActions } from './SegmentActions';
import type { SegmentCriteria } from './SegmentCriteria';
import type { UpdateSettings } from './UpdateSettings';

export type SegmentCreate = {
  name: string;
  type_of_update: 'cron' | 'request';
  update_settings?: UpdateSettings;
  is_archived: boolean;
  criteria: SegmentCriteria;
  actions?: SegmentActions;
};
