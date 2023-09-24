import { Container} from './style';
import { OrdersBoard } from '../OrdersBoard';

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon = '🕒'
        title =  'Fila de espera'/>
      <OrdersBoard
        icon = '👨‍🍳'
        title = 'Em preparção'/>
      <OrdersBoard
        icon = '✅'
        title = 'Pronto!'/>
    </Container>
  );
}
