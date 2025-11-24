import { dados } from "./dados";
import { Container, Title, Table } from "./style";

export default function TabelaContasAReceber() {
  return (
    <Container>
      <Title>Contas a Receber</Title>

      <Table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Valor</th>
            <th>Data Prevista</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.paciente}</td>
              <td>R$ {item.valor}</td>
              <td>{item.data}</td>
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
