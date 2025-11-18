import { Alert, Button, Spin } from 'antd';

import { useCreateDocSale, useDocsSales } from '@/api/hooks';
import mockGet from '@/api/mockGet.json';

export function OrderCreateModal() {
  const { data, isLoading } = useDocsSales();
  const { mutate: createDocSale, isPending: isCreating } = useCreateDocSale();

  const handleCreate = () => {
    createDocSale(
      {
        // TODO: Заполните данные для создания документа
      },
      {
        onSuccess: () => {
          console.log('Документ успешно создан');
        },
        onError: error => {
          console.error('Ошибка создания документа:', error);
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Документы продаж</h3>
          <p className="text-sm text-gray-500">Найдено документов: {data?.count ?? 0}</p>
        </div>
        <Button type="primary" loading={isCreating} onClick={handleCreate}>
          Создать документ
        </Button>
      </div>

      {(data ?? mockGet)?.result?.length ? (
        <div className="space-y-2">
          {(data ?? mockGet).result.map(order => (
            <div key={order.id} className="rounded border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Заказ #{order.number}</p>
                  <p className="text-sm text-gray-500">Контрагент: {order.contragent_name ?? 'Не указан'}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{order.sum} ₽</p>
                  <p className="text-sm text-gray-500">Статус: {order.order_status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Alert message="Нет данных" description="Документы продаж не найдены" type="info" showIcon />
      )}
    </div>
  );
}
