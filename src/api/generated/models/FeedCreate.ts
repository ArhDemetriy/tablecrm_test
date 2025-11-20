/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CriteriaFeed } from './CriteriaFeed';

export type FeedCreate = {
  name: string;
  description?: string;
  root_tag: string;
  item_tag: string;
  field_tags: Record<string, string>;
  criteria?: CriteriaFeed;
};
