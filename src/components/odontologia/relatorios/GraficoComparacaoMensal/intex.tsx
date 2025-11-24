import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Container, Title } from "./style";

const data = [
  { mes: "Jan", receita: 15000, despesa: 8000 },
  { mes: "Fev", receita: 21000, despesa: 12000 },
  { mes: "Mar", receita: 18000, despesa: 9000 },
];

export default function GraficoComparacaoMensal() {
  return (
    <Container>
      <Title>Receita vs Despesa</Title>

      <BarChart width={550} height={300} data={data} style={{marginRight: 15}}>
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="receita" fill="#1E5EFF" />
        <Bar dataKey="despesa" fill="#FF5959" />
      </BarChart>
    </Container>
  );
}
