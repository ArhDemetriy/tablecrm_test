/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrgType } from './OrgType';
import type { TaxType } from './TaxType';

export type OrganizationEdit = {
  type?: string;
  short_name?: string;
  full_name?: string;
  work_name?: string;
  prefix?: string;
  inn?: number;
  kpp?: number;
  okved?: number;
  okved2?: number;
  okpo?: number;
  ogrn?: number;
  org_type?: OrgType;
  tax_type?: TaxType;
  tax_percent?: number;
  registration_date?: number;
};
