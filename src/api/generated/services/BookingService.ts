/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AddBookingEventPhotoModel } from '../models/AddBookingEventPhotoModel';
import type { BaseSearchEventFiltersModel } from '../models/BaseSearchEventFiltersModel';
import type { Booking } from '../models/Booking';
import type { BookingCreateList } from '../models/BookingCreateList';
import type { BookingEditList } from '../models/BookingEditList';
import type { BookingList } from '../models/BookingList';
import type { BookingStatus } from '../models/BookingStatus';
import type { CreateBookingEventModel } from '../models/CreateBookingEventModel';
import type { DocSalesStatus } from '../models/DocSalesStatus';
import type { PatchBookingEventsModel } from '../models/PatchBookingEventsModel';

export class BookingService {
  /**
   * Get Events By Nomenclature
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getEventsByNomenclatureBookingEventsNomenclatureIdxGet({
    idx,
    token,
    limit = 5,
    offset,
  }: {
    idx: number;
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/booking/events/nomenclature/{idx}',
      path: {
        idx: idx,
      },
      query: {
        token: token,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get List Booking
   * @returns BookingList Successful Response
   * @throws ApiError
   */
  public static getListBookingBookingListGet({
    token,
    title,
    contragent,
    startBooking,
    endBooking,
    statusDocSales,
    statusBooking,
    tags,
  }: {
    token: string;
    title?: string;
    contragent?: number;
    startBooking?: number;
    endBooking?: number;
    statusDocSales?: DocSalesStatus;
    statusBooking?: BookingStatus;
    tags?: string;
  }): CancelablePromise<BookingList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/booking/list',
      query: {
        token: token,
        title: title,
        contragent: contragent,
        start_booking: startBooking,
        end_booking: endBooking,
        status_doc_sales: statusDocSales,
        status_booking: statusBooking,
        tags: tags,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Booking By Idx
   * @returns Booking Successful Response
   * @throws ApiError
   */
  public static getBookingByIdxBookingIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<Booking> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/booking/{idx}',
      path: {
        idx: idx,
      },
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Delete Booking
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deleteBookingBookingIdxDelete({ idx, token }: { idx: number; token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/booking/{idx}',
      path: {
        idx: idx,
      },
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Booking
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createBookingBookingCreatePost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: BookingCreateList;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/booking/create',
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
   * Create Booking
   * <p><div style="color:red">Важно!</div>
   * <ul>
   * <li>Если товары не редактируются то в запросе ключ goods не отправляется.</li>
   * <li>Если отправить goods: [] - из бронирования будут удалены все товары товары.</li>
   * <li>Добавление товаров без ID ведет к их добавлению в бронирование.</li>
   * <li>Если отправить goods с изменным полем - произойдет изменение поля. Для этого в элементе goods
   * указывается id и с ним те поля которые хотите изменить в бронировании товара</li>
   * </ul>
   * </p>
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createBookingBookingEditPatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: BookingEditList;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/booking/edit',
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callBookingAmoRepeatPost({ token }: { token: string }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/booking/amo/repeat',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callBookingEventsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<CreateBookingEventModel>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/booking/events',
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callBookingEventsDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/booking/events',
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callBookingEventsPatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<PatchBookingEventsModel>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/booking/events',
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callBookingEventsPhotosPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<AddBookingEventPhotoModel>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/booking/events/photos',
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callBookingEventsPhotosDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/booking/events/photos',
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callBookingEventsSearchPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: BaseSearchEventFiltersModel;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/booking/events/search',
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
