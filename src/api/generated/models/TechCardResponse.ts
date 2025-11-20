/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TechCardItem } from './TechCardItem';
import type { TechCardType } from './TechCardType';
import type { api__tech_cards__schemas__TechCardStatus } from './api__tech_cards__schemas__TechCardStatus';

export type TechCardResponse = {
  name: string;
  description?: string;
  card_type: TechCardType;
  auto_produce?: boolean;
  id: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  status: api__tech_cards__schemas__TechCardStatus;
  items: Array<TechCardItem>;
};
