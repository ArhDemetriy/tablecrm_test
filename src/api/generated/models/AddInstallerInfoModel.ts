/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstalledByRole } from './InstalledByRole';

export type AddInstallerInfoModel = {
  amo_account_id: number;
  installed_by_role: InstalledByRole;
  client_name: string;
  client_token: string;
  client_number_phone: string;
  partner_name?: string;
  partner_token?: string;
  partner_number_phone?: string;
  client_inn?: string;
};
