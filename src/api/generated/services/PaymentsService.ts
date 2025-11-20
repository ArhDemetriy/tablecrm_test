/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { ChildrenEdit } from '../models/ChildrenEdit';
import type { GetPaymentsBasic } from '../models/GetPaymentsBasic';
import type { PaymentChildren } from '../models/PaymentChildren';
import type { PaymentCreate } from '../models/PaymentCreate';
import type { PaymentEdit } from '../models/PaymentEdit';
import type { PaymentInList } from '../models/PaymentInList';
import type { PaymentInListWithData } from '../models/PaymentInListWithData';
import type { api__payments__schemas__GetPayments } from '../models/api__payments__schemas__GetPayments';

export class PaymentsService {
  /**
   * Read Payments List
   * Получение списка платежей (с фильтрами или без)
   * @returns GetPaymentsBasic Successful Response
   * @throws ApiError
   */
  public static readPaymentsListPaymentsGet({
    token,
    offset,
    limit = 100,
    sort = 'created_at:desc',
    createdBy,
    _with,
    detailJson = '',
    name,
    tags,
    externalId,
    relship,
    project,
    contragent,
    paybox,
    payboxTo,
    sourceAccount,
    dateto,
    datefrom,
    paymentType,
    includePayboxDest = false,
    timezone = 'UTC',
    updatedAtGte,
    updatedAtLte,
    createdAtGte,
    createdAtLte,
  }: {
    token: string;
    offset?: number;
    limit?: number;
    sort?: string;
    createdBy?: string;
    _with?: string;
    detailJson?: string;
    name?: string;
    tags?: string;
    externalId?: string;
    relship?: string;
    project?: string;
    contragent?: string;
    paybox?: string;
    payboxTo?: string;
    sourceAccount?: string;
    dateto?: string;
    datefrom?: string;
    paymentType?: string;
    includePayboxDest?: boolean;
    timezone?: string;
    updatedAtGte?: number;
    updatedAtLte?: number;
    createdAtGte?: number;
    createdAtLte?: number;
  }): CancelablePromise<GetPaymentsBasic> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/',
      query: {
        token: token,
        offset: offset,
        limit: limit,
        sort: sort,
        created_by: createdBy,
        _with: _with,
        detail_json: detailJson,
        name: name,
        tags: tags,
        external_id: externalId,
        relship: relship,
        project: project,
        contragent: contragent,
        paybox: paybox,
        paybox_to: payboxTo,
        source_account: sourceAccount,
        dateto: dateto,
        datefrom: datefrom,
        payment_type: paymentType,
        include_paybox_dest: includePayboxDest,
        timezone: timezone,
        updated_at__gte: updatedAtGte,
        updated_at__lte: updatedAtLte,
        created_at__gte: createdAtGte,
        created_at__lte: createdAtLte,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Payment
   * Создание платежа
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createPaymentPaymentsPost({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: PaymentCreate;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments/',
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
   * Read Payment
   * Просмотр платежа по ID
   * @returns PaymentInList Successful Response
   * @throws ApiError
   */
  public static readPaymentPaymentIdGet({
    id,
    token,
  }: {
    id: number;
    token: string;
  }): CancelablePromise<PaymentInList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payment/{id}/',
      path: {
        id: id,
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
   * Update Payment
   * Обновление данных платежа по ID
   *
   * Repeats:
   *
   * repeat_first, repeat last: unix time in seconds
   * repeat_period: yearly, monthly, weekly, daily, hourly, seconds
   *
   * Required fields:
   * yearly: repeat_month, repeat_day
   * monthly: repeat_day
   * weekly: repeat_weekday (specify with comma numbers of weekdays, eg: monday, tuesday and sunday "0,1,6")
   * seconds: repeat_seconds
   *
   * to stop repeats set repeat_period to null
   * @returns PaymentInListWithData Successful Response
   * @throws ApiError
   */
  public static updatePaymentPaymentsIdPut({
    id,
    token,
    requestBody,
  }: {
    id: number;
    token: string;
    requestBody: PaymentEdit;
  }): CancelablePromise<PaymentInListWithData> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/payments/{id}/',
      path: {
        id: id,
      },
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
   * Delete Payment
   * Удаление платежа по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static deletePaymentPaymentsPaymentIdDelete({
    paymentId,
    token,
  }: {
    paymentId: number;
    token: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/payments/{payment_id}/',
      path: {
        payment_id: paymentId,
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
   * Raspil Platezha
   * Распил платежа по ID
   * @returns any Successful Response
   * @throws ApiError
   */
  public static raspilPlatezhaPaymentsSplitIdPost({
    id,
    token,
    requestBody,
  }: {
    id: number;
    token: string;
    requestBody: Array<PaymentChildren>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/payments_split/{id}/',
      path: {
        id: id,
      },
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
   * Split Payment
   * Отмена распила платежа
   * @returns PaymentInList Successful Response
   * @throws ApiError
   */
  public static splitPaymentPaymentsSplitIdDelete({
    id,
    token,
  }: {
    id: number;
    token: string;
  }): CancelablePromise<PaymentInList> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/payments_split/{id}/',
      path: {
        id: id,
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
   * Update Childs Payments
   * Обновление дочерних платежей если родительский распилен
   * @returns any Successful Response
   * @throws ApiError
   */
  public static updateChildsPaymentsPaymentsSplitPut({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<ChildrenEdit>;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/payments_split/',
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
   * Read Payments Childs
   * Получение дочерних платежей по ID родительского
   * @returns api__payments__schemas__GetPayments Successful Response
   * @throws ApiError
   */
  public static readPaymentsChildsPaymentsIdChildsGet({
    id,
    token,
    offset,
    limit = 100,
  }: {
    id: number;
    token: string;
    offset?: number;
    limit?: number;
  }): CancelablePromise<api__payments__schemas__GetPayments> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments/{id}/childs/',
      path: {
        id: id,
      },
      query: {
        token: token,
        offset: offset,
        limit: limit,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Read Payments Meta
   * Мета платежей
   * @returns any Successful Response
   * @throws ApiError
   */
  public static readPaymentsMetaPaymentsMetaGet({
    token,
    limit = 100,
    offset,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/payments_meta/',
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
   * Attach Payment
   * Прикрепление платежа к документам продажи и закупки
   * @returns PaymentInList Successful Response
   * @throws ApiError
   */
  public static attachPaymentPaymentsIdAttachmentPut({
    id,
    token,
    saleId,
    purchaseId,
  }: {
    id: number;
    token: string;
    saleId?: number;
    purchaseId?: number;
  }): CancelablePromise<PaymentInList> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/payments/{id}/attachment/',
      path: {
        id: id,
      },
      query: {
        token: token,
        sale_id: saleId,
        purchase_id: purchaseId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Detach Payment
   * Открепление платежа от документа продажи
   * @returns PaymentInList Successful Response
   * @throws ApiError
   */
  public static detachPaymentPaymentsIdAttachmentDelete({
    id,
    token,
    saleId,
  }: {
    id: number;
    token: string;
    saleId: number;
  }): CancelablePromise<PaymentInList> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/payments/{id}/attachment/',
      path: {
        id: id,
      },
      query: {
        token: token,
        sale_id: saleId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
