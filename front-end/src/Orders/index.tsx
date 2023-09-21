import { Container, Board } from './style';

export function Orders() {
  return (
    <Container>
      <Board>
        <header>
          <span>🕗</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>
      </Board>
    </Container>
  );
}
