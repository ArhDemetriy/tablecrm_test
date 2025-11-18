/** Товар в заказе */
export interface Good {
  /** Тип цены */
  price_type: number | null;
  /** Цена товара */
  price: number;
  /** Количество */
  quantity: number;
  /** ID единицы измерения */
  unit: number | null;
  /** Название единицы измерения (шт, кг, л и т.д.) */
  unit_name: string | null;
  /** Налог */
  tax: number | null;
  /** Скидка */
  discount: number | null;
  /** Сумма скидки */
  sum_discounted: number | null;
  /** Статус товара */
  status: string | null;
  /** ID номенклатуры */
  nomenclature: string;
  /** Название номенклатуры */
  nomenclature_name: string;
}

/** Настройки автоповтора заказа */
export interface OrderSettings {
  /** Период повторяемости (minutes, hours, days, weeks, months) */
  repeatability_period: string;
  /** Значение периода повторяемости */
  repeatability_value: number;
  /** Дата следующего создания (timestamp) */
  date_next_created: number;
  /** Переносить с выходных */
  transfer_from_weekends: boolean;
  /** Пропустить текущий месяц */
  skip_current_month: boolean;
  /** Количество повторений */
  repeatability_count: number;
  /** Статус оплаты по умолчанию */
  default_payment_status: boolean;
  /** Повторяемость тегов */
  repeatability_tags: boolean;
  /** Статус повторяемости */
  repeatability_status: boolean;
}

/** Заказ */
export interface Order {
  /** ID заказа */
  id: number;
  /** Номер заказа */
  number: string;
  /** Дата заказа (timestamp) */
  dated: number | null;
  /** Тип операции (Заказ) */
  operation: string;
  /** Теги заказа */
  tags: string;
  /** Связанные документы продаж */
  docs_sales: null;
  /** Количество номенклатур в заказе */
  nomenclature_count: number;
  /** Оплачено по документу */
  paid_doc: number;
  /** Оплачено рублями */
  paid_rubles: number;
  /** Оплачено бонусами */
  paid_loyality: number;
  /** Статус заказа (проведен/не проведен) */
  status: boolean | null;
  /** Скидка на документ */
  doc_discount: number;
  /** Комментарий к заказу */
  comment: string | null;
  /** ID клиента */
  client: null;
  /** ID контрагента */
  contragent: number | null;
  /** Сегменты контрагента */
  contragent_segments: number[];
  /** Имя контрагента */
  contragent_name: string | null;
  /** ID договора */
  contract: null;
  /** ID организации */
  organization: number;
  /** ID склада */
  warehouse: number | null;
  /** ID автоповтора */
  autorepeat: null;
  /** Настройки автоповтора */
  settings: OrderSettings | null;
  /** Сумма заказа */
  sum: number;
  /** Налог включен в цену */
  tax_included: boolean | null;
  /** Налог активен */
  tax_active: boolean | null;
  /** ID менеджера продаж */
  sales_manager: number;
  /** Товары в заказе */
  goods: Good[];
  /** Информация о доставке */
  delivery_info: null;
  /** Дата обновления (timestamp) */
  updated_at: number;
  /** Дата создания (timestamp) */
  created_at: number;
  /** Есть контрагент */
  has_contragent: boolean;
  /** Есть карта лояльности */
  has_loyality_card: boolean;
  /** Цветовой статус (blue, green, default) */
  color_status: string;
  /** Приоритет заказа */
  priority: number | null;
  /** Статус заказа (received, collecting, collected, delivered, closed, processed) */
  order_status: string;
  /** ID назначенного сборщика */
  assigned_picker: number | null;
  /** ID назначенного курьера */
  assigned_courier: number | null;
  /** Время начала сборки (ISO 8601) */
  picker_started_at: string | null;
  /** Время завершения сборки (ISO 8601) */
  picker_finished_at: string | null;
  /** Время забора курьером (ISO 8601) */
  courier_picked_at: string | null;
  /** Время доставки получателю (ISO 8601) */
  courier_delivered_at: string | null;
}

/** Ответ API со списком заказов */
export interface TDocsSales {
  /** Список заказов */
  result: Order[];
  /** Общее количество заказов */
  count: number;
}

/** Запрос на создание документа продажи */
export interface CreateDocSaleRequest {
  // TODO: Добавить поля для создания документа продажи
  [key: string]: unknown;
}

const API_BASE = 'https://app.tablecrm.com';
const token = import.meta.env.VITE_DOCS_SALES_TOKEN;

export async function getDocsSales(): Promise<TDocsSales> {
  const url = new URL('/api/v1/docs_sales', API_BASE);
  url.searchParams.append('token', token);
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Ошибка загрузки данных: ${response.status}`);
  }
  return (await response.json()) as TDocsSales;
}

export async function createDocSale(data: CreateDocSaleRequest): Promise<unknown> {
  const url = new URL('/api/v1/docs_sales', API_BASE);
  url.searchParams.append('token', token);
  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Ошибка создания документа: ${response.status}`);
  }
  return await response.json();
}
