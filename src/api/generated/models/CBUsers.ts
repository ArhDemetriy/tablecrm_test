/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CBUsers = {
  id: number;
  relation_id?: number;
  phone_number?: string;
  external_id?: string;
  first_name: string;
  last_name?: string;
  username?: string;
  status: boolean;
  photo: string;
  is_admin: boolean;
  created_at: number;
  updated_at: number;
  tags?: Array<string>;
  timezone?: string;
  payment_past_edit_days?: number;
  shift_work_enabled?: boolean;
};
