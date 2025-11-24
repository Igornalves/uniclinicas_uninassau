import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Container, Title } from "./style";

const data = [
  { name: "Consultas", value: 4500 },
  { name: "Exames", value: 3200 },
  { name: "Procedimentos", value: 6800 },
  { name: "Equipamentos", value: 1500 },
];

const COLORS = ["#1E5EFF", "#6EA8FF", "#00C49F", "#FFBB28"];

export default function GraficoCategoria() {
  return (
    <Container>
      <Title>Distribuição por Categoria</Title>

      <PieChart width={550} height={300} style={{marginBottom: 20}}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={110}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Container>
  );
}
