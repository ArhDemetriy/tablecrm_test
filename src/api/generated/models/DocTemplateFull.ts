/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Area } from './Area';
import type { Page } from './Page';

export type DocTemplateFull = {
  id?: number;
  name?: string;
  description?: string;
  tags?: string;
  user_id?: string;
  created_at?: number;
  updated_at?: number;
  is_deleted?: boolean;
  type?: number;
  template_data?: string;
  pages?: Array<Page>;
  areas?: Array<Area>;
};
