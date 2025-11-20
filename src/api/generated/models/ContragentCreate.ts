/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContragentType } from './ContragentType';
import type { Contragent_types } from './Contragent_types';
import type { Gender } from './Gender';

export type ContragentCreate = {
  name: string;
  external_id?: string;
  phone?: string;
  inn?: string;
  description?: string;
  contragent_type?: Contragent_types;
  birth_date?: string;
  email?: string;
  data?: Record<string, any>;
  gender?: Gender;
  type?: ContragentType;
  additional_phones?: string;
};
