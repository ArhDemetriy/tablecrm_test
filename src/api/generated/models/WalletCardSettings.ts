/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Location } from './Location';
import type { PassColorConfig } from './PassColorConfig';

export type WalletCardSettings = {
  logo_text?: string;
  description?: string;
  barcode_message?: string;
  colors?: PassColorConfig;
  icon_path?: string;
  logo_path?: string;
  strip_path?: string;
  locations?: Array<Location>;
};
