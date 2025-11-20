import { Button, Modal } from 'antd';

import { OldOrderCreateModal } from '@/OldOrderCreateModal';
import { PlusOutlined } from '@ant-design/icons';

export function App() {
  const [modal, contextHolder] = Modal.useModal();

  const showModal = () => {
    modal.info({
      title: 'Мобильная форма создания заказа',
      content: <OldOrderCreateModal />,
      width: 1360,
      centered: true,
      closable: true,
      maskClosable: false,
      styles: {
        body: {
          padding: '24px',
        },
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      {contextHolder}
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Новая продажа
      </Button>
    </div>
  );
}
