import { dados } from "./dados";
import { ContainerTabela, Tabela, TituloTabela } from "./style";

export default function TabelaRecebimentos() {
    return (
        <ContainerTabela>
            <TituloTabela>Recebimentos</TituloTabela>

            <Tabela>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Cliente (Tutor)</th>
                        <th>Paciente (Animal)</th>
                        <th>Serviço/Produto</th>
                        <th>Forma de Pagamento</th>
                        <th>Valor (R$)</th>
                        <th>Status</th>
                        <th>Observações</th>
                    </tr>
                </thead>

                <tbody>
                    {dados.map((row, index) => (
                        <tr key={index}>
                            <td>{row.data}</td>
                            <td>{row.tutor}</td>
                            <td>{row.animal}</td>
                            <td>{row.servico}</td>
                            <td>{row.pagamento}</td>
                            <td>{row.valor}</td>
                            <td
                                style={{
                                    color:
                                        row.status === "Pago"
                                            ? "green"
                                            : row.status === "Pendente"
                                            ? "red"
                                            : row.status === "Agendado"
                                            ? "gold"
                                            : "black"
                                }}
                            >
                                {row.status}
                            </td>
                            <td>{row.obs}</td>
                        </tr>
                    ))}
                </tbody>
            </Tabela>
        </ContainerTabela>
    );
}
