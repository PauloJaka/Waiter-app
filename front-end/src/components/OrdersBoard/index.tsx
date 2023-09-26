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

  function handleOpenModal () {
    setIsModalVisible(true);
  }

  return (
    <Board>
      <OrderModal visible = {isModalVisible}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      <OrdersContainer>
        {orders.length > 0 && (
          orders.map((order) => (
            <button key={order._id} onClick={handleOpenModal}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))
        )}
      </OrdersContainer>
    </Board>
  );
}
