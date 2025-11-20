/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { Body_upload_file_apple_wallet_card_settings_upload_post } from '../models/Body_upload_file_apple_wallet_card_settings_upload_post';
import type { WalletCardSettings } from '../models/WalletCardSettings';

export class AppleWalletCardSettingsService {
  /**
   * Upload File
   * @returns any Successful Response
   * @throws ApiError
   */
  public static uploadFileAppleWalletCardSettingsUploadPost({
    formData,
  }: {
    formData: Body_upload_file_apple_wallet_card_settings_upload_post;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/apple_wallet_card_settings/upload',
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Apple Wallet Card Settings
   * @returns WalletCardSettings Successful Response
   * @throws ApiError
   */
  public static getAppleWalletCardSettingsAppleWalletCardSettingsGet({
    token,
  }: {
    token: string;
  }): CancelablePromise<WalletCardSettings> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/apple_wallet_card_settings',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Apple Wallet Card Settings
   * @returns WalletCardSettings Successful Response
   * @throws ApiError
   */
  public static createAppleWalletCardSettingsAppleWalletCardSettingsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: WalletCardSettings;
  }): CancelablePromise<WalletCardSettings> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/apple_wallet_card_settings',
      query: {
        token: token,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update Apple Wallet Card Settings
   * @returns WalletCardSettings Successful Response
   * @throws ApiError
   */
  public static updateAppleWalletCardSettingsAppleWalletCardSettingsPatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: WalletCardSettings;
  }): CancelablePromise<WalletCardSettings> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/apple_wallet_card_settings',
      query: {
        token: token,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
