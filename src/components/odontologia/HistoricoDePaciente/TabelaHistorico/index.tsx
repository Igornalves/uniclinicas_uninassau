import { Table, Th, Tr, Td } from "./style";

export default function TabelaHistorico() {
  const linhas = Array(7).fill(0);

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Data</Th>
          <Th>Animal</Th>
          <Th>Espécie/Raça</Th>
          <Th>Responsável</Th>
          <Th>Profissional</Th>
          <Th>Resumo do Atendimento</Th>
          <Th>Documentos</Th>
          <Th>Status</Th>
          <Th>Ações</Th>
        </Tr>
      </thead>

      <tbody>
        {linhas.map((_, i) => (
          <Tr key={i}>
            <Td>12/08/2025 <br /> 09:30</Td>
            <Td>Thor</Td>
            <Td>Cão / Labrador</Td>
            <Td>João Silva</Td>
            <Td>Dr. Carlos</Td>
            <Td>Animal estável</Td>
            <Td>Receita.pdf</Td>
            <Td>Concluído</Td>
            <Td><a href="#">Ver Detalhes</a></Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}
