/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { CreateReviewRequest } from '../models/CreateReviewRequest';
import type { CreateViewEventRequest } from '../models/CreateViewEventRequest';
import type { CreateViewEventResponse } from '../models/CreateViewEventResponse';
import type { FavoriteListResponse } from '../models/FavoriteListResponse';
import type { FavoriteRequest } from '../models/FavoriteRequest';
import type { FavoriteResponse } from '../models/FavoriteResponse';
import type { LocationsListResponse } from '../models/LocationsListResponse';
import type { MarketplaceAddToCartRequest } from '../models/MarketplaceAddToCartRequest';
import type { MarketplaceCartResponse } from '../models/MarketplaceCartResponse';
import type { MarketplaceOrderRequest } from '../models/MarketplaceOrderRequest';
import type { MarketplaceOrderResponse } from '../models/MarketplaceOrderResponse';
import type { MarketplaceProductList } from '../models/MarketplaceProductList';
import type { MarketplaceRemoveFromCartRequest } from '../models/MarketplaceRemoveFromCartRequest';
import type { MarketplaceReview } from '../models/MarketplaceReview';
import type { MarketplaceSort } from '../models/MarketplaceSort';
import type { QRResolveResponse } from '../models/QRResolveResponse';
import type { ReviewEntityTypes } from '../models/ReviewEntityTypes';
import type { ReviewListResponse } from '../models/ReviewListResponse';
import type { SortBy } from '../models/SortBy';
import type { UpdateReviewRequest } from '../models/UpdateReviewRequest';
import type { UtmEntityType } from '../models/UtmEntityType';

export class MarketplaceService {
  /**
   * Get Marketplace Products
   * Получение всех публичных товаров маркетплейса
   *
   * Фильтрует только товары с:
   * - price_type = 'chatting'
   * @returns MarketplaceProductList Successful Response
   * @throws ApiError
   */
  public static getMarketplaceProductsMpProductsGet({
    phone,
    lat,
    lon,
    page = 1,
    size = 20,
    sortBy,
    sortOrder = 'desc',
    category,
    manufacturer,
    minPrice,
    maxPrice,
    inStock,
    ratingFrom,
    ratingTo,
  }: {
    phone?: string;
    lat?: number;
    lon?: number;
    page?: number;
    size?: number;
    sortBy?: MarketplaceSort;
    sortOrder?: 'asc' | 'desc';
    category?: string;
    manufacturer?: string;
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
    ratingFrom?: number;
    ratingTo?: number;
  }): CancelablePromise<MarketplaceProductList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/mp/products',
      query: {
        phone: phone,
        lat: lat,
        lon: lon,
        page: page,
        size: size,
        sort_by: sortBy,
        sort_order: sortOrder,
        category: category,
        manufacturer: manufacturer,
        min_price: minPrice,
        max_price: maxPrice,
        in_stock: inStock,
        rating_from: ratingFrom,
        rating_to: ratingTo,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Marketplace Locations
   * Получить список публичных локаций
   * @returns LocationsListResponse Successful Response
   * @throws ApiError
   */
  public static getMarketplaceLocationsMpLocationsGet({
    lat,
    lon,
    radius,
    page = 1,
    size = 20,
  }: {
    lat?: number;
    lon?: number;
    radius?: number;
    page?: number;
    size?: number;
  }): CancelablePromise<LocationsListResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/mp/locations',
      query: {
        lat: lat,
        lon: lon,
        radius: radius,
        page: page,
        size: size,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Marketplace Order
   * Создать заказ маркетплейса с автоматическим распределением по кешбоксам
   * @returns MarketplaceOrderResponse Successful Response
   * @throws ApiError
   */
  public static createMarketplaceOrderMpOrdersPost({
    requestBody,
    entityType,
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmName,
    utmPhone,
    utmEmail,
    utmLeadid,
    utmYclientid,
    utmGaclientid,
  }: {
    requestBody: MarketplaceOrderRequest;
    entityType?: UtmEntityType;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmName?: string;
    utmPhone?: string;
    utmEmail?: string;
    utmLeadid?: string;
    utmYclientid?: string;
    utmGaclientid?: string;
  }): CancelablePromise<MarketplaceOrderResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mp/orders',
      query: {
        entity_type: entityType,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_name: utmName,
        utm_phone: utmPhone,
        utm_email: utmEmail,
        utm_leadid: utmLeadid,
        utm_yclientid: utmYclientid,
        utm_gaclientid: utmGaclientid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Resolve Qr Code
   * Получить товар или локацию по QR-коду (MD5 хэш)
   * @returns QRResolveResponse Successful Response
   * @throws ApiError
   */
  public static resolveQrCodeMpQrQrHashGet({ qrHash }: { qrHash: string }): CancelablePromise<QRResolveResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/mp/qr/{qr_hash}',
      path: {
        qr_hash: qrHash,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Reviews
   * @returns ReviewListResponse Successful Response
   * @throws ApiError
   */
  public static getReviewsMpReviewsGet({
    entityType,
    entityId,
    page = 1,
    size = 20,
    sort,
    viewOnlyRates,
  }: {
    entityType: ReviewEntityTypes;
    entityId: number;
    page?: number;
    size?: number;
    sort?: SortBy;
    viewOnlyRates?: number;
  }): CancelablePromise<ReviewListResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/mp/reviews',
      query: {
        entity_type: entityType,
        entity_id: entityId,
        page: page,
        size: size,
        sort: sort,
        view_only_rates: viewOnlyRates,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create Review
   * @returns MarketplaceReview Successful Response
   * @throws ApiError
   */
  public static createReviewMpReviewsPost({
    requestBody,
  }: {
    requestBody: CreateReviewRequest;
  }): CancelablePromise<MarketplaceReview> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mp/reviews',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Update Review
   * @returns MarketplaceReview Successful Response
   * @throws ApiError
   */
  public static updateReviewMpReviewsReviewIdPatch({
    reviewId,
    requestBody,
  }: {
    reviewId: number;
    requestBody: UpdateReviewRequest;
  }): CancelablePromise<MarketplaceReview> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/mp/reviews/{review_id}',
      path: {
        review_id: reviewId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Favorites
   * Получить список избранного пользователя
   * @returns FavoriteListResponse Successful Response
   * @throws ApiError
   */
  public static getFavoritesMpFavoritesGet({
    phone,
    page = 1,
    size = 20,
  }: {
    /**
     * Номер телефона
     */
    phone: string;
    /**
     * Номер страницы
     */
    page?: number;
    /**
     * Размер страницы
     */
    size?: number;
  }): CancelablePromise<FavoriteListResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/mp/favorites',
      query: {
        phone: phone,
        page: page,
        size: size,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Add To Favorites
   * Добавить товар или локацию в избранное
   * @returns FavoriteResponse Successful Response
   * @throws ApiError
   */
  public static addToFavoritesMpFavoritesPost({
    requestBody,
    entityType,
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmName,
    utmPhone,
    utmEmail,
    utmLeadid,
    utmYclientid,
    utmGaclientid,
  }: {
    requestBody: FavoriteRequest;
    entityType?: UtmEntityType;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmName?: string;
    utmPhone?: string;
    utmEmail?: string;
    utmLeadid?: string;
    utmYclientid?: string;
    utmGaclientid?: string;
  }): CancelablePromise<FavoriteResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mp/favorites',
      query: {
        entity_type: entityType,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_name: utmName,
        utm_phone: utmPhone,
        utm_email: utmEmail,
        utm_leadid: utmLeadid,
        utm_yclientid: utmYclientid,
        utm_gaclientid: utmGaclientid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Remove From Favorites
   * Удалить элемент из избранного
   * @returns any Successful Response
   * @throws ApiError
   */
  public static removeFromFavoritesMpFavoritesFavoriteIdDelete({
    favoriteId,
    phone,
  }: {
    favoriteId: number;
    /**
     * Номер телефона
     */
    phone: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/mp/favorites/{favorite_id}',
      path: {
        favorite_id: favoriteId,
      },
      query: {
        phone: phone,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get View Events Info
   * Информация о событиях просмотра
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getViewEventsInfoMpEventsViewGet({
    cashboxId,
    fromTime,
    toTime,
    contragentPhone,
    entityType,
  }: {
    cashboxId: number;
    fromTime?: string;
    toTime?: string;
    contragentPhone?: string;
    entityType?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/mp/events/view',
      query: {
        cashbox_id: cashboxId,
        from_time: fromTime,
        to_time: toTime,
        contragent_phone: contragentPhone,
        entity_type: entityType,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Create View Event
   * Создание события просмотра товара
   * @returns CreateViewEventResponse Successful Response
   * @throws ApiError
   */
  public static createViewEventMpEventsViewPost({
    requestBody,
    entityType,
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmName,
    utmPhone,
    utmEmail,
    utmLeadid,
    utmYclientid,
    utmGaclientid,
  }: {
    requestBody: CreateViewEventRequest;
    entityType?: UtmEntityType;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmName?: string;
    utmPhone?: string;
    utmEmail?: string;
    utmLeadid?: string;
    utmYclientid?: string;
    utmGaclientid?: string;
  }): CancelablePromise<CreateViewEventResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mp/events/view',
      query: {
        entity_type: entityType,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_name: utmName,
        utm_phone: utmPhone,
        utm_email: utmEmail,
        utm_leadid: utmLeadid,
        utm_yclientid: utmYclientid,
        utm_gaclientid: utmGaclientid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Add To Cart
   * Добавить товар в корзину покупок
   *
   * Если корзина не существует, она будет создана автоматически.
   * Если товар уже есть в корзине, количество будет увеличено.
   * @returns MarketplaceCartResponse Successful Response
   * @throws ApiError
   */
  public static addToCartMpCartAddPost({
    requestBody,
  }: {
    requestBody: MarketplaceAddToCartRequest;
  }): CancelablePromise<MarketplaceCartResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/mp/cart/add',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Get Cart
   * Получить содержимое корзины покупок для указанного номера телефона
   * @returns MarketplaceCartResponse Successful Response
   * @throws ApiError
   */
  public static getCartMpCartGet({
    contragentPhone,
  }: {
    contragentPhone: string;
  }): CancelablePromise<MarketplaceCartResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/mp/cart',
      query: {
        contragent_phone: contragentPhone,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
  /**
   * Remove From Cart
   * Удалить товар из корзины покупок
   *
   * Если warehouse_id не указан, будет удален товар без привязки к складу.
   * Если указан - будет удален товар конкретного склада.
   * @returns MarketplaceCartResponse Successful Response
   * @throws ApiError
   */
  public static removeFromCartMpCartRemoveDelete({
    requestBody,
  }: {
    requestBody: MarketplaceRemoveFromCartRequest;
  }): CancelablePromise<MarketplaceCartResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/mp/cart/remove',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
