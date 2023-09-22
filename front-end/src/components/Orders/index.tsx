import { Container} from './style';
import { OrdersBoard } from '../OrdersBoard';

export function Orders() {
  return (
    <Container>
      <OrdersBoard />
      <OrdersBoard />
      <OrdersBoard />
    </Container>
  );
}
