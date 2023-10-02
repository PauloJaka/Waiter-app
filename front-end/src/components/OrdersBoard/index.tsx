import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';
import { useState } from 'react';

interface OrderBoardProps{
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard ({icon, title, orders}: OrderBoardProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectOrder, setSelectOrder] = useState<null | Order>(null);

  function handleOpenModal (order: Order) {
    setIsModalVisible(true);
    setSelectOrder(order);
  }

  function handleCloseModal () {
    setIsModalVisible(false);
    setSelectOrder(null);
  }

  return (
    <Board>
      <OrderModal
        visible = {isModalVisible}
        order = {selectOrder}
        onClose = {handleCloseModal}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      <OrdersContainer>
        {orders.length > 0 && (
          orders.map((order) => (
            <button key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))
        )}
      </OrdersContainer>
    </Board>
  );
}
