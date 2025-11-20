/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { AnalyticsResponse } from '../models/AnalyticsResponse';
import type { AssignUserRole } from '../models/AssignUserRole';
import type { CashierStats } from '../models/CashierStats';
import type { CreateUTMTag } from '../models/CreateUTMTag';
import type { DeliveryInfoSchema } from '../models/DeliveryInfoSchema';
import type { NotifyResponse } from '../models/NotifyResponse';
import type { NotifyType } from '../models/NotifyType';
import type { OrderLinksResponse } from '../models/OrderLinksResponse';
import type { OrderStatusUpdate } from '../models/OrderStatusUpdate';
import type { ResponseDeliveryInfoSchema } from '../models/ResponseDeliveryInfoSchema';
import type { UtmTag } from '../models/UtmTag';
import type { api__docs_sales__schemas__CountRes } from '../models/api__docs_sales__schemas__CountRes';
import type { api__docs_sales__schemas__CreateMass } from '../models/api__docs_sales__schemas__CreateMass';
import type { api__docs_sales__schemas__EditMass } from '../models/api__docs_sales__schemas__EditMass';
import type { api__docs_sales__schemas__ListView } from '../models/api__docs_sales__schemas__ListView';
import type { api__docs_sales__schemas__View } from '../models/api__docs_sales__schemas__View';

export class DocsSalesService {
  /**
   * Get By Id
   * Получение документа по ID
   * @returns api__docs_sales__schemas__View Successful Response
   * @throws ApiError
   */
  public static getByIdDocsSalesIdxGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<api__docs_sales__schemas__View> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_sales/{idx}/',
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
   * Delete
   * Удаление документа
   * @returns api__docs_sales__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static deleteDocsSalesIdxDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<api__docs_sales__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/docs_sales/{idx}/',
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
   * Update
   * Редактирование документов
   * @returns api__docs_sales__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static updateDocsSalesIdxPatch({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: api__docs_sales__schemas__EditMass;
  }): CancelablePromise<api__docs_sales__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/docs_sales/{idx}/',
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
   * Get List
   * @returns api__docs_sales__schemas__CountRes Successful Response
   * @throws ApiError
   */
  public static getListDocsSalesGet({
    token,
    limit = 100,
    offset,
    showGoods = true,
    kanban = false,
    sort = 'created_at:desc',
    tags,
    operation,
    comment,
    contragent,
    organization,
    warehouse,
    salesManager,
    createdBy,
    status,
    isDeleted,
    datedFrom,
    datedTo,
    createdAtFrom,
    createdAtTo,
    updatedAtFrom,
    updatedAtTo,
    priority,
    hasDelivery,
    hasPicker,
    hasCourier,
    orderStatus,
    deliveryDateFrom,
    deliveryDateTo,
    pickerId,
    courierId,
    updatedAtGte,
    updatedAtLte,
    createdAtGte,
    createdAtLte,
  }: {
    token: string;
    limit?: number;
    offset?: number;
    showGoods?: boolean;
    kanban?: boolean;
    sort?: string;
    tags?: string;
    operation?: string;
    comment?: string;
    contragent?: number;
    organization?: number;
    warehouse?: number;
    salesManager?: number;
    createdBy?: number;
    status?: boolean;
    isDeleted?: boolean;
    datedFrom?: number;
    datedTo?: number;
    createdAtFrom?: number;
    createdAtTo?: number;
    updatedAtFrom?: number;
    updatedAtTo?: number;
    priority?: number;
    hasDelivery?: boolean;
    hasPicker?: boolean;
    hasCourier?: boolean;
    orderStatus?: string;
    deliveryDateFrom?: number;
    deliveryDateTo?: number;
    pickerId?: number;
    courierId?: number;
    updatedAtGte?: number;
    updatedAtLte?: number;
    createdAtGte?: number;
    createdAtLte?: number;
  }): CancelablePromise<api__docs_sales__schemas__CountRes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_sales/',
      query: {
        token: token,
        limit: limit,
        offset: offset,
        show_goods: showGoods,
        kanban: kanban,
        sort: sort,
        tags: tags,
        operation: operation,
        comment: comment,
        contragent: contragent,
        organization: organization,
        warehouse: warehouse,
        sales_manager: salesManager,
        created_by: createdBy,
        status: status,
        is_deleted: isDeleted,
        dated_from: datedFrom,
        dated_to: datedTo,
        created_at_from: createdAtFrom,
        created_at_to: createdAtTo,
        updated_at_from: updatedAtFrom,
        updated_at_to: updatedAtTo,
        priority: priority,
        has_delivery: hasDelivery,
        has_picker: hasPicker,
        has_courier: hasCourier,
        order_status: orderStatus,
        delivery_date_from: deliveryDateFrom,
        delivery_date_to: deliveryDateTo,
        picker_id: pickerId,
        courier_id: courierId,
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
   *   Call
   * @returns any Successful Response
   * @throws ApiError
   */
  public static callDocsSalesPost({
    token,
    requestBody,
    generateOut = true,
  }: {
    token: string;
    requestBody: api__docs_sales__schemas__CreateMass;
    generateOut?: boolean;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/docs_sales/',
      query: {
        token: token,
        generate_out: generateOut,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Delete
   * Пакетное удаление документов
   * @returns api__docs_sales__schemas__ListView Successful Response
   * @throws ApiError
   */
  public static deleteDocsSalesDelete({
    token,
    requestBody,
  }: {
    token: string;
    requestBody: Array<number>;
  }): CancelablePromise<api__docs_sales__schemas__ListView> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/docs_sales/',
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
   * Get List By Created Date
   * Получение списка документов
   * @returns api__docs_sales__schemas__CountRes Successful Response
   * @throws ApiError
   */
  public static getListByCreatedDateDocsSalesCreatedDateGet({
    date,
    token,
    showGoods = false,
    kanban = false,
    tags,
    operation,
    comment,
    contragent,
    organization,
    warehouse,
    salesManager,
    createdBy,
    status,
    isDeleted,
    datedFrom,
    datedTo,
    createdAtFrom,
    createdAtTo,
    updatedAtFrom,
    updatedAtTo,
    priority,
    hasDelivery,
    hasPicker,
    hasCourier,
    orderStatus,
    deliveryDateFrom,
    deliveryDateTo,
    pickerId,
    courierId,
    updatedAtGte,
    updatedAtLte,
    createdAtGte,
    createdAtLte,
  }: {
    date: string;
    token: string;
    showGoods?: boolean;
    kanban?: boolean;
    tags?: string;
    operation?: string;
    comment?: string;
    contragent?: number;
    organization?: number;
    warehouse?: number;
    salesManager?: number;
    createdBy?: number;
    status?: boolean;
    isDeleted?: boolean;
    datedFrom?: number;
    datedTo?: number;
    createdAtFrom?: number;
    createdAtTo?: number;
    updatedAtFrom?: number;
    updatedAtTo?: number;
    priority?: number;
    hasDelivery?: boolean;
    hasPicker?: boolean;
    hasCourier?: boolean;
    orderStatus?: string;
    deliveryDateFrom?: number;
    deliveryDateTo?: number;
    pickerId?: number;
    courierId?: number;
    updatedAtGte?: number;
    updatedAtLte?: number;
    createdAtGte?: number;
    createdAtLte?: number;
  }): CancelablePromise<api__docs_sales__schemas__CountRes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_sales/created/{date}',
      path: {
        date: date,
      },
      query: {
        token: token,
        show_goods: showGoods,
        kanban: kanban,
        tags: tags,
        operation: operation,
        comment: comment,
        contragent: contragent,
        organization: organization,
        warehouse: warehouse,
        sales_manager: salesManager,
        created_by: createdBy,
        status: status,
        is_deleted: isDeleted,
        dated_from: datedFrom,
        dated_to: datedTo,
        created_at_from: createdAtFrom,
        created_at_to: createdAtTo,
        updated_at_from: updatedAtFrom,
        updated_at_to: updatedAtTo,
        priority: priority,
        has_delivery: hasDelivery,
        has_picker: hasPicker,
        has_courier: hasCourier,
        order_status: orderStatus,
        delivery_date_from: deliveryDateFrom,
        delivery_date_to: deliveryDateTo,
        picker_id: pickerId,
        courier_id: courierId,
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
   * Get List By Delivery Date
   * Получение списка документов
   * @returns api__docs_sales__schemas__CountRes Successful Response
   * @throws ApiError
   */
  public static getListByDeliveryDateDocsSalesDeliveryDateGet({
    date,
    token,
    showGoods = false,
    kanban = false,
    tags,
    operation,
    comment,
    contragent,
    organization,
    warehouse,
    salesManager,
    createdBy,
    status,
    isDeleted,
    datedFrom,
    datedTo,
    createdAtFrom,
    createdAtTo,
    updatedAtFrom,
    updatedAtTo,
    priority,
    hasDelivery,
    hasPicker,
    hasCourier,
    orderStatus,
    deliveryDateFrom,
    deliveryDateTo,
    pickerId,
    courierId,
    updatedAtGte,
    updatedAtLte,
    createdAtGte,
    createdAtLte,
  }: {
    date: string;
    token: string;
    showGoods?: boolean;
    kanban?: boolean;
    tags?: string;
    operation?: string;
    comment?: string;
    contragent?: number;
    organization?: number;
    warehouse?: number;
    salesManager?: number;
    createdBy?: number;
    status?: boolean;
    isDeleted?: boolean;
    datedFrom?: number;
    datedTo?: number;
    createdAtFrom?: number;
    createdAtTo?: number;
    updatedAtFrom?: number;
    updatedAtTo?: number;
    priority?: number;
    hasDelivery?: boolean;
    hasPicker?: boolean;
    hasCourier?: boolean;
    orderStatus?: string;
    deliveryDateFrom?: number;
    deliveryDateTo?: number;
    pickerId?: number;
    courierId?: number;
    updatedAtGte?: number;
    updatedAtLte?: number;
    createdAtGte?: number;
    createdAtLte?: number;
  }): CancelablePromise<api__docs_sales__schemas__CountRes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_sales/delivery/{date}',
      path: {
        date: date,
      },
      query: {
        token: token,
        show_goods: showGoods,
        kanban: kanban,
        tags: tags,
        operation: operation,
        comment: comment,
        contragent: contragent,
        organization: organization,
        warehouse: warehouse,
        sales_manager: salesManager,
        created_by: createdBy,
        status: status,
        is_deleted: isDeleted,
        dated_from: datedFrom,
        dated_to: datedTo,
        created_at_from: createdAtFrom,
        created_at_to: createdAtTo,
        updated_at_from: updatedAtFrom,
        updated_at_to: updatedAtTo,
        priority: priority,
        has_delivery: hasDelivery,
        has_picker: hasPicker,
        has_courier: hasCourier,
        order_status: orderStatus,
        delivery_date_from: deliveryDateFrom,
        delivery_date_to: deliveryDateTo,
        picker_id: pickerId,
        courier_id: courierId,
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
   * Delivery Info
   * Добавление информации о доставке в заказу
   * @returns ResponseDeliveryInfoSchema Successful Response
   * @throws ApiError
   */
  public static deliveryInfoDocsSalesIdxDeliveryInfoPost({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: DeliveryInfoSchema;
  }): CancelablePromise<ResponseDeliveryInfoSchema> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/docs_sales/{idx}/delivery_info/',
      path: {
        idx: idx,
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
   * Get Order Links
   * Получение сгенерированных ссылок для заказа
   * @returns OrderLinksResponse Successful Response
   * @throws ApiError
   */
  public static getOrderLinksDocsSalesIdxLinksGet({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<OrderLinksResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_sales/{idx}/links',
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
   * Notify Order
   * Генерация и отправка уведомлений о заказе
   * @returns NotifyResponse Successful Response
   * @throws ApiError
   */
  public static notifyOrderDocsSalesIdxNotifyPost({
    idx,
    token,
    type,
    sendNotification = true,
    requestBody,
  }: {
    idx: number;
    token: string;
    type: NotifyType;
    sendNotification?: boolean;
    requestBody?: Array<string>;
  }): CancelablePromise<NotifyResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/docs_sales/{idx}/notify',
      path: {
        idx: idx,
      },
      query: {
        token: token,
        type: type,
        send_notification: sendNotification,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update Order Status
   * Обновление статуса заказа
   * @returns api__docs_sales__schemas__View Successful Response
   * @throws ApiError
   */
  public static updateOrderStatusDocsSalesIdxStatusPatch({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: OrderStatusUpdate;
  }): CancelablePromise<api__docs_sales__schemas__View> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/docs_sales/{idx}/status',
      path: {
        idx: idx,
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
   * Assign User To Order
   * Назначение сборщика или курьера для заказа
   * @returns api__docs_sales__schemas__View Successful Response
   * @throws ApiError
   */
  public static assignUserToOrderDocsSalesIdxAssignRolePatch({
    idx,
    role,
    token,
  }: {
    idx: number;
    role: AssignUserRole;
    token: string;
  }): CancelablePromise<api__docs_sales__schemas__View> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/docs_sales/{idx}/assign/{role}',
      path: {
        idx: idx,
        role: role,
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
   * Verify Hash And Get Order
   * Проверка валидности хеш-ссылки и получение информации о заказе
   * @returns any Successful Response
   * @throws ApiError
   */
  public static verifyHashAndGetOrderDocsSalesVerifyHashGet({
    hash,
    orderId,
    role,
  }: {
    hash: string;
    orderId: number;
    role: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_sales/verify/{hash}',
      path: {
        hash: hash,
      },
      query: {
        order_id: orderId,
        role: role,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Cashier Stats
   * Получение статистики кассира за период.
   * @returns CashierStats Successful Response
   * @throws ApiError
   */
  public static getCashierStatsDocsSalesStatsGet({
    token,
    year,
    month,
    dateFrom,
    dateTo,
  }: {
    token: string;
    year?: number;
    month?: number;
    dateFrom?: number;
    dateTo?: number;
  }): CancelablePromise<CashierStats> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_sales/stats',
      query: {
        token: token,
        year: year,
        month: month,
        date_from: dateFrom,
        date_to: dateTo,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Docs Sales Analytics
   * Получение детальной аналитики по заказам за период.
   * @returns AnalyticsResponse Successful Response
   * @throws ApiError
   */
  public static getDocsSalesAnalyticsDocsSalesAnalyticsGet({
    token,
    year,
    month,
    dateFrom,
    dateTo,
    role,
  }: {
    token: string;
    year?: number;
    month?: number;
    dateFrom?: number;
    dateTo?: number;
    /**
     * picker, courier, или manager
     */
    role?: string;
  }): CancelablePromise<AnalyticsResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_sales/analytics',
      query: {
        token: token,
        year: year,
        month: month,
        date_from: dateFrom,
        date_to: dateTo,
        role: role,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Utm Tag
   * @returns UtmTag Successful Response
   * @throws ApiError
   */
  public static getUtmTagDocsSalesIdxUtmGet({ idx, token }: { idx: number; token: string }): CancelablePromise<UtmTag> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/docs_sales/{idx}/utm',
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
   * Update Utm Tag
   * @returns UtmTag Successful Response
   * @throws ApiError
   */
  public static updateUtmTagDocsSalesIdxUtmPut({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: CreateUTMTag;
  }): CancelablePromise<UtmTag> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/docs_sales/{idx}/utm',
      path: {
        idx: idx,
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
   * Create Utm Tag
   * @returns UtmTag Successful Response
   * @throws ApiError
   */
  public static createUtmTagDocsSalesIdxUtmPost({
    idx,
    token,
    requestBody,
  }: {
    idx: number;
    token: string;
    requestBody: CreateUTMTag;
  }): CancelablePromise<UtmTag> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/docs_sales/{idx}/utm',
      path: {
        idx: idx,
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
   * Delete Utm Tag
   * @returns void
   * @throws ApiError
   */
  public static deleteUtmTagDocsSalesIdxUtmDelete({
    idx,
    token,
  }: {
    idx: number;
    token: string;
  }): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/docs_sales/{idx}/utm',
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
}
