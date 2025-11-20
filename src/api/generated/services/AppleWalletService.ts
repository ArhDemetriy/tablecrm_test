/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { DeviceRegistration } from '../models/DeviceRegistration';
import type { SerialNumbersList } from '../models/SerialNumbersList';

export class AppleWalletService {
  /**
   * Create Apple Wallet Card
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createAppleWalletCardCreateAppleWalletCardPost({
    token,
    cardId,
  }: {
    token: string;
    cardId: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/create_apple_wallet_card',
      query: {
        token: token,
        card_id: cardId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Version
   * Эндпоинт для проверки версии веб-сервиса (обязательный).
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getVersionVersionGet(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/version',
    });
  }
  /**
   * Register Device
   * Регистрирует устройство для получения обновлений пасса.
   * Apple вызывает этот эндпоинт, когда пользователь добавляет пасс в Wallet.
   * @returns any Successful Response
   * @throws ApiError
   */
  public static registerDeviceV1DevicesDeviceLibraryIdentifierRegistrationsPassTypeIdentifierSerialNumberPost({
    deviceLibraryIdentifier,
    passTypeIdentifier,
    serialNumber,
    requestBody,
  }: {
    deviceLibraryIdentifier: string;
    passTypeIdentifier: string;
    serialNumber: string;
    requestBody: DeviceRegistration;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/devices/{device_library_identifier}/registrations/{pass_type_identifier}/{serial_number}',
      path: {
        device_library_identifier: deviceLibraryIdentifier,
        pass_type_identifier: passTypeIdentifier,
        serial_number: serialNumber,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Unregister Device
   * Отменяет регистрацию устройства для пасса.
   * Apple вызывает этот эндпоинт, когда пользователь удаляет пасс из Wallet.
   * @returns any Successful Response
   * @throws ApiError
   */
  public static unregisterDeviceV1DevicesDeviceLibraryIdentifierRegistrationsPassTypeIdentifierSerialNumberDelete({
    deviceLibraryIdentifier,
    passTypeIdentifier,
    serialNumber,
  }: {
    deviceLibraryIdentifier: string;
    passTypeIdentifier: string;
    serialNumber: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/v1/devices/{device_library_identifier}/registrations/{pass_type_identifier}/{serial_number}',
      path: {
        device_library_identifier: deviceLibraryIdentifier,
        pass_type_identifier: passTypeIdentifier,
        serial_number: serialNumber,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Pass
   * Возвращает последнюю версию пасса.
   * Устройство вызывает этот эндпоинт после получения push-уведомления.
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getPassV1PassesPassTypeIdentifierSerialNumberGet({
    passTypeIdentifier,
    serialNumber,
  }: {
    passTypeIdentifier: string;
    serialNumber: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/passes/{pass_type_identifier}/{serial_number}',
      path: {
        pass_type_identifier: passTypeIdentifier,
        serial_number: serialNumber,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Passes For Device
   * Возвращает список серийных номеров пассов, которые были обновлены.
   * Устройство может вызывать этот эндпоинт для проверки обновлений.
   * @returns SerialNumbersList Successful Response
   * @throws ApiError
   */
  public static getPassesForDeviceV1DevicesDeviceLibraryIdentifierRegistrationsPassTypeIdentifierGet({
    deviceLibraryIdentifier,
    passTypeIdentifier,
    passesUpdatedSince,
  }: {
    deviceLibraryIdentifier: string;
    passTypeIdentifier: string;
    passesUpdatedSince?: string;
  }): CancelablePromise<SerialNumbersList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/devices/{device_library_identifier}/registrations/{pass_type_identifier}',
      path: {
        device_library_identifier: deviceLibraryIdentifier,
        pass_type_identifier: passTypeIdentifier,
      },
      query: {
        passesUpdatedSince: passesUpdatedSince,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Renew Pass
   * @returns any Successful Response
   * @throws ApiError
   */
  public static renewPassAskUpdatePassPost({
    token,
    cardId,
  }: {
    token: string;
    cardId: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ask_update_pass',
      query: {
        token: token,
        card_id: cardId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Link To Card
   * @returns any Successful Response
   * @throws ApiError
   */
  public static linkToCardLinkToCardGet({ token, cardId }: { token: string; cardId: number }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/link_to_card',
      query: {
        token: token,
        card_id: cardId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
