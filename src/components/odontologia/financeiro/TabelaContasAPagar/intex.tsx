import { dados } from "./dados";
import { Container, Title, Table } from "./style";

export default function TabelaContasAPagar() {
  return (
    <Container>
      <Title>Contas a Pagar</Title>

      <Table>
        <thead>
          <tr>
            <th>Fornecedor</th>
            <th>Valor</th>
            <th>Vencimento</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.fornecedor}</td>
              <td>R$ {item.valor}</td>
              <td>{item.vencimento}</td>
              <td
                style={{
                        color:
                            item.status === "Pago"
                                ? "green"
                                : item.status === "Pendente"
                                ? "red"
                                : item.status === "Agendado"
                                ? "gold"
                                : "black"
                }}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
