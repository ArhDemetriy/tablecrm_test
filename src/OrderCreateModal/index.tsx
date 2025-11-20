import { AutoComplete, Button, Empty, Form, Input, InputNumber, Modal, Select, Spin, Table, message } from 'antd';
import { useMemo, useState } from 'react';
import { z } from 'zod';

import type {
  api__docs_sales__schemas__Item as Good,
  api__docs_sales__schemas__ViewInList as Order,
} from '@/api/generated';
import { useCreateDocSale, useDocsSales } from '@/api/hooks';
import mockGet from '@/api/mockGet.json';
import { DeleteOutlined, SearchOutlined, SettingOutlined, TruckOutlined } from '@ant-design/icons';

// Zod-схема валидации формы
const orderFormSchema = z.object({
  token: z.string().min(1, 'Токен обязателен'),
  phone: z.string().optional(),
  contragent: z.number().optional(),
  account: z.string().optional(),
  warehouse: z.number().optional(),
  organization: z.number().min(1, 'Организация обязательна'),
  priority: z.number().min(0).max(10),
  price_type: z.number().optional(),
  goods: z.array(z.any()).min(1, 'Добавьте хотя бы один товар'),
  paid_rubles: z.number().min(0),
  paid_loyality: z.number().min(0),
});

type OrderFormData = z.infer<typeof orderFormSchema>;

// Хелперы для извлечения уникальных значений
const getUniqueOrganizations = (orders: Order[]) =>
  Array.from(new Set(orders.map(order => order.organization!).filter(Boolean)), value => ({
    value,
    label: `Организация ${value}`,
  }));

const getUniqueWarehouses = (orders: Order[]) =>
  Array.from(new Set(orders.map(order => order.warehouse!).filter(Boolean)), value => ({
    value,
    label: `Склад ${value}`,
  }));

const getAllGoods = (orders: Order[]) =>
  Array.from(
    new Map(
      orders
        .flatMap(order => order.goods ?? [])
        .filter((good): good is Good => good !== undefined)
        .map(good => [good.nomenclature, good])
    ).values()
  );

const getUniquePriceTypesFromGoods = (goods: Good[]) =>
  Array.from(new Set(goods.map(good => good.price_type!).filter(Boolean)), value => ({
    value,
    label: `Тип цены ${value}`,
  }));

const getContragents = (orders: Order[]) =>
  Array.from(
    new Map(
      orders
        .filter(order => order.contragent && order.contragent_name)
        .map(
          ({ contragent, contragent_name }) =>
            [
              contragent!,
              {
                name: contragent_name!,
                phone: contragent_name, // В данных нет телефона, используем имя
              },
            ] as const
        )
    ),
    ([id, info]) => ({
      value: id,
      label: info.name,
      phone: info.phone,
    })
  );

export function OrderCreateModal() {
  const { data, isLoading } = useDocsSales();
  const orders = useMemo(
    () =>
      (import.meta.env.DEV ? (data ?? (mockGet as unknown as typeof data)) : data)?.result?.filter(
        (order): order is Order => order !== undefined
      ) ?? [],
    [data]
  );
  const { allGoods, priceTypes, contragents, organizations, warehouses } = useMemo(() => {
    const allGoods = getAllGoods(orders);
    return {
      allGoods,
      priceTypes: getUniquePriceTypesFromGoods(allGoods),
      organizations: getUniqueOrganizations(orders),
      warehouses: getUniqueWarehouses(orders),
      contragents: getContragents(orders),
    };
  }, [orders]);

  const { mutate: createDocSale, isPending: isCreating } = useCreateDocSale();
  const { 0: form } = Form.useForm<OrderFormData>();

  // Состояние формы
  const [selectedGoods, setSelectedGoods] = useState<(Good & { quantity: number })[]>([]);
  const [isGoodsModalOpen, setIsGoodsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContragent, setSelectedContragent] = useState<number | null>(null);

  // Вычисляемые значения
  const { totalPrice, totalPriceWithDiscount } = useMemo(
    () =>
      selectedGoods.reduce(
        (sum, good) => {
          const increment = good.price * good.quantity;
          sum.totalPrice += increment;
          if (good.discount) sum.totalPriceWithDiscount += increment * (good.discount / 100);
          return sum;
        },
        {
          totalPrice: 0,
          totalPriceWithDiscount: 0,
        }
      ),
    [selectedGoods]
  );
  const totalAmount = totalPrice - totalPriceWithDiscount;

  // Обработка отправки формы
  const handleSubmit = async (conducted: boolean) =>
    form
      .validateFields()
      .then(values => ({
        ...orderFormSchema.parse({
          ...values,
          goods: selectedGoods,
        }),
        conducted,
      }))
      .then(formData =>
        createDocSale([formData], {
          onSuccess: () => {
            message.success(conducted ? 'Документ создан и проведен' : 'Документ создан');
            form.resetFields();
            setSelectedGoods([]);
          },
          onError: error => {
            message.error('Ошибка создания документа');
            console.error(error);
          },
        })
      )
      .catch(error => {
        if (error instanceof z.ZodError) {
          message.error(error.issues[0]?.message ?? 'Ошибка валидации');
        } else {
          message.error('Заполните все обязательные поля');
        }
      });

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Spin size="large" tip="Загрузка данных..." />
      </div>
    );
  }

  return (
    <Form form={form} layout="vertical" initialValues={{ priority: 0, paid_rubles: 0, paid_loyality: 0 }}>
      <div className="grid grid-cols-[280px_1fr_280px] gap-4">
        {/* Левая панель - Основные поля */}
        <div className="space-y-4">
          <Form.Item name="token" label="Токен кассы" rules={[{ required: true, message: 'Введите токен' }]}>
            <Input placeholder="Введите токен" />
          </Form.Item>

          <Form.Item name="phone" label="Телефон клиента">
            <AutoComplete
              options={contragents.map(c => ({ value: c.phone ?? '', label: c.label, id: c.value }))}
              onSelect={(_, { id }) => {
                if (!contragents.find(c => c.value === id)) return;
                setSelectedContragent(id);
                form.setFieldValue('contragent', id);
              }}
              placeholder="Поиск по телефону"
              filterOption={(inputValue, option) =>
                option?.label?.toLowerCase().includes(inputValue.toLowerCase()) ?? false
              }
            />
          </Form.Item>

          <Form.Item name="account" label="Счет поступления">
            <Select placeholder="Выберите счет" allowClear>
              <Select.Option value="main">Основной счет</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="warehouse" label="Склад отгрузки">
            <Select placeholder="Выберите склад" options={warehouses} allowClear />
          </Form.Item>

          <Form.Item
            name="organization"
            label="Организация"
            rules={[{ required: true, message: 'Выберите организацию' }]}
          >
            <Select placeholder="Выберите организацию" options={organizations} />
          </Form.Item>

          <Form.Item name="priority" label="Приоритет">
            <InputNumber min={0} max={10} className="w-full" placeholder="0-10" />
          </Form.Item>

          <Form.Item name="price_type" label="Тип цены">
            <Select placeholder="Выберите тип цены" options={priceTypes} allowClear />
          </Form.Item>

          <Form.Item>
            <Button icon={<SettingOutlined />} block>
              Доп. параметры
            </Button>
          </Form.Item>

          <Form.Item>
            <Button icon={<TruckOutlined />} block>
              Доставка
            </Button>
          </Form.Item>
        </div>

        {/* Центральная панель - Товары */}
        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-2">
            <Button type="primary" onClick={() => setIsGoodsModalOpen(true)}>
              Выбрать
            </Button>
            <Input
              placeholder="Поиск товаров"
              prefix={<SearchOutlined />}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="flex-1"
            />
          </div>

          <Table
            dataSource={selectedGoods}
            columns={[
              {
                title: 'Название товара',
                dataIndex: 'nomenclature_name',
                key: 'nomenclature_name',
              },
              {
                title: 'Сумма',
                dataIndex: 'price',
                key: 'price',
                render: (price: number) => `${price} ₽`,
              },
              {
                title: 'Скидка',
                dataIndex: 'discount',
                key: 'discount',
                render: (discount: number | null) => `${discount ?? 0}%`,
              },
              {
                title: 'Количество',
                dataIndex: 'quantity',
                key: 'quantity',
              },
              {
                title: 'Единица',
                dataIndex: 'unit_name',
                key: 'unit_name',
              },
              {
                title: 'Итого',
                key: 'total',
                render: (_, record) => {
                  const discount = record.discount ?? 0;
                  const total = record.price * record.quantity * (1 - discount / 100);
                  return `${total.toFixed(2)} ₽`;
                },
              },
              {
                title: 'Действие',
                key: 'action',
                render: (_, record) => (
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => setSelectedGoods(prev => prev.filter(g => g.nomenclature !== record.nomenclature))}
                  />
                ),
              },
            ]}
            rowKey="nomenclature"
            pagination={false}
            locale={{
              emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Нет данных" className="py-8" />,
            }}
          />
        </div>

        {/* Правая панель - Итоги */}
        <div className="space-y-4">
          <Form.Item label="Без скидки:">
            <Input value={totalPrice.toFixed(2)} disabled />
          </Form.Item>

          <Form.Item label="Скидка:">
            <Input value={totalPriceWithDiscount.toFixed(2)} disabled />
          </Form.Item>

          <Form.Item label="Остаток лояльности:">
            <Input
              value={selectedContragent ? '0' : 'Не выбран контрагент!'}
              disabled
              status={selectedContragent ? undefined : 'warning'}
            />
          </Form.Item>

          <Form.Item label="Итого:">
            <Input value={totalAmount.toFixed(2)} disabled />
          </Form.Item>

          <Form.Item name="paid_loyality" label="Баллами:">
            <InputNumber min={0} className="w-full" disabled={!selectedContragent} />
          </Form.Item>

          <Form.Item name="paid_rubles" label="Рублями:">
            <InputNumber min={0} className="w-full" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block loading={isCreating} onClick={() => handleSubmit(true)} className="">
              Создать и провести
            </Button>
          </Form.Item>

          <Form.Item>
            <Button block loading={isCreating} onClick={() => handleSubmit(false)}>
              Только создать
            </Button>
          </Form.Item>
        </div>
      </div>

      {/* Модалка выбора товаров */}
      <GoodsSelectionModal
        open={isGoodsModalOpen}
        onCancel={() => setIsGoodsModalOpen(false)}
        goods={allGoods}
        onSelect={good => {
          setSelectedGoods(prev => {
            const { nomenclature } = good;
            let goodIsSelected = false;
            const next = prev.map(g => {
              if (g.nomenclature !== nomenclature) return g;
              goodIsSelected = true;
              return { ...g, quantity: g.quantity + good.quantity };
            });
            if (!goodIsSelected) next.push(good);
            return next;
          });
          setIsGoodsModalOpen(false);
        }}
      />
    </Form>
  );
}

// Компонент модалки выбора товаров
function GoodsSelectionModal({
  open,
  onCancel,
  goods,
  onSelect,
}: {
  open: boolean;
  onCancel: () => void;
  goods: Good[];
  onSelect: (good: Good & { quantity: number }) => void;
}) {
  const [search, setSearch] = useState('');
  const [selectedGood, setSelectedGood] = useState<Good | null>(null);
  const [quantity, setQuantity] = useState(1);

  const filteredGoods = useMemo(
    () => goods.filter(good => good.nomenclature_name?.toLowerCase().includes(search.toLowerCase()) ?? false),
    [goods, search]
  );

  return (
    <Modal
      title="Выбор товара"
      open={open}
      onCancel={onCancel}
      onOk={() => {
        if (!selectedGood) return;
        onSelect({ ...selectedGood, quantity });
        setSelectedGood(null);
        setQuantity(1);
        setSearch('');
      }}
      okText="Добавить"
      cancelText="Отмена"
      okButtonProps={{ disabled: !selectedGood }}
      width={800}
    >
      <div className="space-y-4">
        <Input
          placeholder="Поиск по названию"
          prefix={<SearchOutlined />}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <Table
          dataSource={filteredGoods}
          columns={[
            {
              title: 'Название',
              dataIndex: 'nomenclature_name',
              key: 'nomenclature_name',
            },
            {
              title: 'Цена',
              dataIndex: 'price',
              key: 'price',
              render: (price: number) => `${price} ₽`,
            },
            {
              title: 'Единица',
              dataIndex: 'unit_name',
              key: 'unit_name',
            },
          ]}
          rowKey="nomenclature"
          pagination={{ pageSize: 10 }}
          onRow={record => ({
            onClick: () => setSelectedGood(record),
            className: selectedGood?.nomenclature === record.nomenclature ? 'bg-blue-50' : '',
          })}
          rowClassName="cursor-pointer"
        />

        {selectedGood && (
          <div className="flex items-center gap-4 rounded border bg-gray-50 p-4">
            <div className="flex-1">
              <p className="font-medium">{selectedGood.nomenclature_name}</p>
              <p className="text-sm text-gray-500">Цена: {selectedGood.price} ₽</p>
            </div>
            <div className="flex items-center gap-2">
              <span>Количество:</span>
              <InputNumber min={1} value={quantity} onChange={val => setQuantity(val ?? 1)} />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
