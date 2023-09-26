import { Container} from './style';
import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../../types/Order';

const orders: Order[] = [
  {
    '_id': '64f667e9195a617241541401',
    'table': '1',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1693773258890-quatro-queijos.png',
          'price': 40
        },
        'quantity': 3,
        '_id': '64f667e9195a617241541402'
      }
    ],
  }
];


export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon = '🕒'
        title =  'Fila de espera'
        orders={orders}/>
      <OrdersBoard
        icon = '👨‍🍳'
        title = 'Em preparção'
        orders={[]}/>
      <OrdersBoard
        icon = '✅'
        title = 'Pronto!'
        orders={[]}/>
    </Container>
  );
}
