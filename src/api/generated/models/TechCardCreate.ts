/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TechCardItemCreate } from './TechCardItemCreate';
import type { TechCardType } from './TechCardType';

export type TechCardCreate = {
  name: string;
  description?: string;
  card_type: TechCardType;
  auto_produce?: boolean;
  items: Array<TechCardItemCreate>;
};
