/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SegmentWithContragents = {
  id: number;
  name: string;
  criteria: Record<string, any>;
  actions?: Record<string, any>;
  updated_at?: string;
  type_of_update: string;
  update_settings?: Record<string, any>;
  status: string;
  is_archived: boolean;
  contragents_count?: number;
  added_contragents_count?: number;
  deleted_contragents_count?: number;
  entered_contragents_count?: number;
  exited_contragents_count?: number;
};
