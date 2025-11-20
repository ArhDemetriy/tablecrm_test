/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QrEntityTypes } from './QrEntityTypes';

/**
 * Ответ QR-резолвера
 */
export type QRResolveResponse = {
  type: QrEntityTypes;
  entity: Record<string, any>;
  qr_hash: string;
  resolved_at: string;
};
