import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { Overlay, ModalBody, OrderDetails } from './style';

interface OrderModalProps {
    visible : boolean;
    order: Order | null;
}

export function OrderModal ({ visible, order}: OrderModalProps) {

  if(!visible || !order){
    return null;
  }
  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button'>
            <img src={closeIcon} alt="Out-icon" />
          </button>
        </header>

        <div className='status-container'>
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕒'}
              {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          {order.products.map(({ _id, product, quantity}) => (
            <div className='item' key={_id}>
              <img
                src={`http://localhost:3002/uploads/${product.imagePath}`}
                alt={product.name}
                width="48p"
                height="40" />
            </div>
          ))}
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
