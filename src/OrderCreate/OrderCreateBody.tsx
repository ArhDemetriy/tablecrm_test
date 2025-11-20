import { AutoComplete, Button, Input, InputNumber, Modal, Select, Table, message } from 'antd';
import { useEffect, useMemo, useState } from 'react';

import type { Contragent, NomenclatureGet } from '@/api/generated';
import {
  useContragents,
  useCreateDocSale,
  useNomenclature,
  useOrganizations,
  usePayboxes,
  usePriceTypes,
  useWarehouses,
} from '@/api/hooks';
import { DeleteOutlined } from '@ant-design/icons';

type SelectedProduct = NomenclatureGet & { quantity: number; selectedPrice: number };

export function OrderCreateBody() {
  // Состояние токена
  const [token, setToken] = useState('');
  const [tokenInput, setTokenInput] = useState('');

  // Состояние формы
  const [contragentPhone, setContragentPhone] = useState('');
  const [selectedContragent, setSelectedContragent] = useState<Contragent | null>(null);
  const [selectedPaybox, setSelectedPaybox] = useState<number | undefined>();
  const [selectedWarehouse, setSelectedWarehouse] = useState<number | undefined>();
  const [selectedOrganization, setSelectedOrganization] = useState<number | undefined>();
  const [selectedPriceType, setSelectedPriceType] = useState<number | undefined>();
  const [productSearch, setProductSearch] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

  // Модалка товаров
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Хуки данных
  const { data: contragentsData } = useContragents(token);
  const { data: warehousesData } = useWarehouses(token);
  const { data: payboxesData } = usePayboxes(token);
  const { data: organizationsData } = useOrganizations(token);
  const { data: priceTypesData } = usePriceTypes(token);
  const { data: nomenclatureData } = useNomenclature(token);
  const { mutate: createDocSale, isPending: isCreating } = useCreateDocSale(token);

  // Извлечение данных
  const contragents = useMemo(() => contragentsData?.result ?? [], [contragentsData]);
  const warehouses = useMemo(() => warehousesData?.result ?? [], [warehousesData]);
  const payboxes = useMemo(() => payboxesData?.result ?? [], [payboxesData]);
  const organizations = useMemo(() => organizationsData?.result ?? [], [organizationsData]);
  const priceTypes = useMemo(() => priceTypesData?.result ?? [], [priceTypesData]);
  const nomenclature = useMemo(() => nomenclatureData?.result ?? [], [nomenclatureData]);

  // Вычисление итогов
  const { totalItems, totalSum } = useMemo(() => {
    return selectedProducts.reduce(
      (acc: { totalItems: number; totalSum: number }, product: SelectedProduct) => ({
        totalItems: acc.totalItems + product.quantity,
        totalSum: acc.totalSum + product.selectedPrice * product.quantity,
      }),
      { totalItems: 0, totalSum: 0 }
    );
  }, [selectedProducts]);

  // Обработчик изменения токена
  const handleTokenSubmit = () => {
    if (!tokenInput.trim()) {
      message.error('Введите токен');
      return;
    }
    // Каскадная очистка при изменении токена
    if (token && tokenInput !== token) {
      setContragentPhone('');
      setSelectedContragent(null);
      setSelectedPaybox(undefined);
      setSelectedWarehouse(undefined);
      setSelectedOrganization(undefined);
      setSelectedPriceType(undefined);
      setProductSearch('');
      setSelectedProducts([]);
    }
    setToken(tokenInput);
  };

  // Каскадная очистка при изменении контрагента
  const handleContragentChange = (value: string) => {
    setContragentPhone(value);
    const contragent = contragents.find((c: Contragent) => c.phone === value);
    setSelectedContragent(contragent ?? null);

    // Очистка полей ниже
    setSelectedPaybox(undefined);
    setSelectedWarehouse(undefined);
    setSelectedOrganization(undefined);
    setSelectedPriceType(undefined);
    setProductSearch('');
    setSelectedProducts([]);
  };

  // Поиск контрагентов по телефону на бэке
  const { refetch: searchContragents } = useContragents(token, { phone: contragentPhone });
  const handleSearchContragent = async () => {
    if (!contragentPhone.trim()) {
      message.warning('Введите телефон для поиска');
      return;
    }
    const result = await searchContragents();
    if (result.data?.result && result.data.result.length > 0) {
      message.success(`Найдено контрагентов: ${result.data.result.length}`);
    } else {
      message.info('Контрагенты не найдены');
    }
  };

  // Открытие модалки товаров
  const handleOpenProductModal = () => {
    setIsProductModalOpen(true);
  };

  // Отправка формы
  const handleSubmit = async (status: boolean) => {
    if (!selectedOrganization) {
      message.error('Выберите организацию');
      return;
    }
    if (selectedProducts.length === 0) {
      message.error('Добавьте хотя бы один товар');
      return;
    }

    const goods = selectedProducts.map((product: SelectedProduct) => ({
      nomenclature: product.id,
      nomenclature_name: product.name,
      price: product.selectedPrice,
      quantity: product.quantity,
      unit: product.unit,
      unit_name: product.unit_name,
      price_type: selectedPriceType,
    }));

    createDocSale(
      [
        {
          contragent: selectedContragent?.id,
          warehouse: selectedWarehouse,
          organization: selectedOrganization!,
          goods,
          status,
        },
      ],
      {
        onSuccess: () => {
          message.success(status ? 'Документ создан и проведён' : 'Документ создан');
          // Очистка товаров после успешного создания
          setSelectedProducts([]);
          setProductSearch('');
        },
        onError: error => {
          message.error('Ошибка при создании документа');
          console.error(error);
        },
      }
    );
  };

  return (
    <div className="flex w-full max-w-[420px] flex-col gap-4 rounded-lg bg-white p-6 shadow-md">
      <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
        Токен кассы
        <Input
          placeholder="Введите токен"
          value={tokenInput}
          onChange={e => setTokenInput(e.target.value)}
          onPressEnter={handleTokenSubmit}
        />
      </label>

      <Button type="primary" block onClick={handleTokenSubmit} className="bg-blue-500 hover:bg-blue-600">
        Продолжить
      </Button>
      {token && (
        <>
          {/* Контрагент */}
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Контрагент (поиск по телефону)
            <div className="flex gap-2">
              <AutoComplete
                className="flex-1"
                placeholder="Телефон клиента"
                value={contragentPhone}
                onChange={handleContragentChange}
                options={contragents.map((c: Contragent) => ({
                  value: c.phone ?? '',
                  label: `${c.name ?? ''} - ${c.phone ?? ''}`,
                }))}
                filterOption={(inputValue, option) =>
                  String(option?.label ?? '')
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                }
              />
              <Button onClick={handleSearchContragent}>Найти</Button>
            </div>
          </label>

          {/* Счёт поступления */}
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Счёт поступления
            <Select
              className="w-full"
              placeholder="Выберите..."
              value={selectedPaybox}
              onChange={setSelectedPaybox}
              allowClear
              options={payboxes.map(p => ({ value: p.id, label: p.name }))}
            />
          </label>

          {/* Склад отгрузки */}
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Склад отгрузки
            <Select
              className="w-full"
              placeholder="Выберите..."
              value={selectedWarehouse}
              onChange={setSelectedWarehouse}
              allowClear
              options={warehouses.map(w => ({ value: w.id, label: w.name }))}
            />
          </label>

          {/* Организация */}
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Организация
            <Select
              className="w-full"
              placeholder="Выберите..."
              value={selectedOrganization}
              onChange={setSelectedOrganization}
              allowClear
              options={organizations.map(o => ({ value: o.id, label: o.short_name }))}
            />
          </label>

          {/* Тип цены */}
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Тип цены
            <Select
              className="w-full"
              placeholder="Выберите..."
              value={selectedPriceType}
              onChange={setSelectedPriceType}
              allowClear
              options={priceTypes.map(pt => ({ value: pt.id, label: pt.name }))}
            />
          </label>

          {/* Поиск товара */}
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Поиск товара
            <div className="flex gap-2">
              <Input
                className="flex-1"
                placeholder="Введите название"
                value={productSearch}
                onChange={e => setProductSearch(e.target.value)}
              />
              <Button onClick={handleOpenProductModal}>Добавить</Button>
            </div>
          </label>

          {/* Список добавленных товаров */}
          <div className="max-h-64 overflow-y-auto rounded border border-gray-200">
            {selectedProducts.length === 0 ? (
              <div className="p-4 text-center text-gray-500">Товары не добавлены</div>
            ) : (
              <div className="divide-y">
                {selectedProducts.map(product => (
                  <div key={product.id} className="flex items-center justify-between p-3">
                    <div className="flex-1">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-gray-500">
                        {product.quantity} {product.unit_name} × {product.selectedPrice} ₽ ={' '}
                        {(product.quantity * product.selectedPrice).toFixed(2)} ₽
                      </div>
                    </div>
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => setSelectedProducts(prev => prev.filter(p => p.id !== product.id))}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Итоги */}
          <div className="rounded bg-gray-50 p-4">
            <div className="mb-2 flex justify-between">
              <span className="font-medium">Итого товаров:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Сумма:</span>
              <span className="text-lg font-bold">{totalSum.toFixed(2)} ₽</span>
            </div>
          </div>

          {/* Кнопки действий */}
          <Button
            type="primary"
            block
            loading={isCreating}
            onClick={() => handleSubmit(true)}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Создать продажу
          </Button>
          <Button block loading={isCreating} onClick={() => handleSubmit(false)}>
            Создать и провести
          </Button>

          {/* Модалка выбора товаров */}
          <ProductSelectionModal
            open={isProductModalOpen}
            onCancel={() => setIsProductModalOpen(false)}
            products={nomenclature}
            selectedPriceType={selectedPriceType}
            initialSearch={productSearch}
            onSelect={product => {
              setSelectedProducts(prev => {
                const existing = prev.find(p => p.id === product.id);
                if (existing) {
                  return prev.map(p => (p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p));
                }
                return [...prev, product];
              });
              setIsProductModalOpen(false);
            }}
          />
        </>
      )}
    </div>
  );
}

// Компонент модалки выбора товаров
function ProductSelectionModal({
  open,
  onCancel,
  products,
  selectedPriceType,
  initialSearch,
  onSelect,
}: {
  open: boolean;
  onCancel: () => void;
  products: NomenclatureGet[];
  selectedPriceType?: number;
  initialSearch: string;
  onSelect: (product: SelectedProduct) => void;
}) {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<NomenclatureGet | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Копирование поискового запроса при открытии
  const handleOpen = () => {
    if (open) {
      setSearch(initialSearch);
    }
  };

  useEffect(() => {
    handleOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const filteredProducts = useMemo(
    () => products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())),
    [products, search]
  );

  const handleAdd = () => {
    if (!selectedProduct) {
      message.warning('Выберите товар');
      return;
    }

    // Определяем цену товара
    let price = 0;
    if (selectedProduct.prices && selectedProduct.prices.length > 0) {
      const priceObj = selectedPriceType
        ? selectedProduct.prices.find(p => String(p.price_type) === String(selectedPriceType))
        : selectedProduct.prices[0];
      price = priceObj?.price ?? 0;
    }

    onSelect({
      ...selectedProduct,
      quantity,
      selectedPrice: price,
    });

    // Сброс состояния
    setSelectedProduct(null);
    setQuantity(1);
    setSearch('');
  };

  return (
    <Modal
      title="Выбор товара"
      open={open}
      onCancel={onCancel}
      onOk={handleAdd}
      okText="Добавить"
      cancelText="Отмена"
      width={800}
      okButtonProps={{ disabled: !selectedProduct }}
    >
      <div className="space-y-4">
        <Input placeholder="Поиск по названию" value={search} onChange={e => setSearch(e.target.value)} />

        <Table
          dataSource={filteredProducts}
          columns={[
            {
              title: 'Название',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Цена',
              key: 'price',
              render: (_, record) => {
                const priceObj = selectedPriceType
                  ? record.prices?.find(p => String(p.price_type) === String(selectedPriceType))
                  : record.prices?.[0];
                return `${priceObj?.price ?? 0} ₽`;
              },
            },
            {
              title: 'Единица',
              dataIndex: 'unit_name',
              key: 'unit_name',
            },
          ]}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          onRow={record => ({
            onClick: () => setSelectedProduct(record),
            className: selectedProduct?.id === record.id ? 'bg-blue-50 cursor-pointer' : 'cursor-pointer',
          })}
          size="small"
        />

        {selectedProduct && (
          <div className="flex items-center gap-4 rounded border bg-gray-50 p-4">
            <div className="flex-1">
              <p className="font-medium">{selectedProduct.name}</p>
              <p className="text-sm text-gray-500">
                Цена:{' '}
                {selectedPriceType
                  ? (selectedProduct.prices?.find(p => String(p.price_type) === String(selectedPriceType))?.price ?? 0)
                  : (selectedProduct.prices?.[0]?.price ?? 0)}{' '}
                ₽
              </p>
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
