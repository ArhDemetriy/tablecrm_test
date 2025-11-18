import { Button, Modal } from 'antd';

import { OrderCreateModal } from '@/OrderCreateModal';
import { PlusOutlined } from '@ant-design/icons';

export function App() {
  const [modal, contextHolder] = Modal.useModal();

  const showModal = () => {
    modal.info({
      title: 'Мобильная форма создания заказа',
      content: <OrderCreateModal />,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      {contextHolder}
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Открыть модалку
      </Button>
    </div>
  );
}
