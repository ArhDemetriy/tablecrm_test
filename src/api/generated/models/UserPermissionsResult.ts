/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPermissionsList } from './UserPermissionsList';

export type UserPermissionsResult = {
  is_admin?: boolean;
  user_id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  permissions: Array<UserPermissionsList>;
};
