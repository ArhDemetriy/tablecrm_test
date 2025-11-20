/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CategoryTree = {
  key: number;
  name: string;
  nom_count: number;
  description?: string;
  code?: number;
  status?: boolean;
  parent?: number;
  children?: Array<CategoryTree>;
  expanded_flag: boolean;
  picture?: string;
  updated_at: number;
  created_at: number;
};
