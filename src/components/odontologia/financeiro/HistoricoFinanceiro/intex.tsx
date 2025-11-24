import { eventos } from "./dados";
import { Container, Title, Item, Dot } from "./style";

export default function HistoricoFinanceiro() {
  return (
    <Container>
      <Title>Histórico Financeiro</Title>

      {eventos.map((ev, i) => (
        <Item key={i}>
          <Dot />
          <span>{ev.texto}</span>
          <small>{ev.data}</small>
        </Item>
      ))}
    </Container>
  );
}
