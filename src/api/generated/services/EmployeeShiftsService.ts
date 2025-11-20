/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CBUsersListShortWithShifts } from '../models/CBUsersListShortWithShifts';
import type { ShiftEventsList } from '../models/ShiftEventsList';
import type { ShiftResponse } from '../models/ShiftResponse';
import type { ShiftStatistics } from '../models/ShiftStatistics';
import type { ShiftStatusResponse } from '../models/ShiftStatusResponse';

export class EmployeeShiftsService {
  /**
   * Start Shift
   * Начать смену
   * @returns ShiftResponse Successful Response
   * @throws ApiError
   */
  public static startShiftEmployeeShiftsStartPost({ token }: { token: string }): CancelablePromise<ShiftResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/employee-shifts/start',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * End Shift
   * Завершить смену
   * @returns ShiftResponse Successful Response
   * @throws ApiError
   */
  public static endShiftEmployeeShiftsEndPost({ token }: { token: string }): CancelablePromise<ShiftResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/employee-shifts/end',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Break
   * Создать перерыв
   * @returns ShiftResponse Successful Response
   * @throws ApiError
   */
  public static createBreakEmployeeShiftsBreakPost({
    token,
    durationMinutes,
  }: {
    token: string;
    durationMinutes: number;
  }): CancelablePromise<ShiftResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/employee-shifts/break',
      query: {
        token: token,
        duration_minutes: durationMinutes,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Shift Status
   * Получить текущий статус смены пользователя
   * @returns ShiftStatusResponse Successful Response
   * @throws ApiError
   */
  public static getShiftStatusEmployeeShiftsStatusGet({
    token,
  }: {
    token: string;
  }): CancelablePromise<ShiftStatusResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/employee-shifts/status',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Users List With Shift Info
   * Получить список пользователей с информацией о сменах (админ)
   * @returns CBUsersListShortWithShifts Successful Response
   * @throws ApiError
   */
  public static getUsersListWithShiftInfoEmployeeShiftsListWithShiftsGet({
    token,
    name,
    limit = 100,
    offset,
  }: {
    token: string;
    name?: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<CBUsersListShortWithShifts> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/employee-shifts/list-with-shifts/',
      query: {
        token: token,
        name: name,
        limit: limit,
        offset: offset,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Shifts Statistics
   * Получить статистику по сменам (админ)
   * @returns ShiftStatistics Successful Response
   * @throws ApiError
   */
  public static getShiftsStatisticsEmployeeShiftsShiftsStatisticsGet({
    token,
  }: {
    token: string;
  }): CancelablePromise<ShiftStatistics> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/employee-shifts/shifts-statistics/',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * End Break Early
   * Завершить перерыв досрочно
   * @returns ShiftResponse Successful Response
   * @throws ApiError
   */
  public static endBreakEarlyEmployeeShiftsBreakEndPost({
    token,
  }: {
    token: string;
  }): CancelablePromise<ShiftResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/employee-shifts/break/end',
      query: {
        token: token,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Shifts Events
   * @returns ShiftEventsList Successful Response
   * @throws ApiError
   */
  public static getShiftsEventsEmployeeShiftsGetShiftsEventsGet({
    token,
    limit = 30,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<ShiftEventsList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/employee-shifts/get_shifts_events',
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
}
