/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type HttpRequest = {
  trigger_on_new?: boolean;
  method: 'GET' | 'POST' | 'PATCH';
  url: string;
  headers?: Record<string, any>;
  params?: Record<string, any>;
  body?: Record<string, any>;
  sleep?: number;
};
