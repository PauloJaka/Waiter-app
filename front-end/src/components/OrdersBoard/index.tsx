import { Board, OrdersContainer } from './styles';

export function OrdersBoard () {
  return (
    <Board>
      <header>
        <span>🕗</span>
        <strong>Fila de espera</strong>
        <span>(1)</span>
      </header>
      <OrdersContainer>
        <button>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
        <button>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}