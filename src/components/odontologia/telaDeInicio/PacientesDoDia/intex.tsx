import { PieChart, Pie, Cell } from "recharts";
import { Card, Title, LegendContainer } from "./style";

interface DataItem {
  name: string;
  value: number;
  [key: string]: number | string;  // <- NECESSÁRIO PARA O RECHARTS ACEITAR
}

const data: DataItem[] = [
  { name: "Recorrentes", value: 33 },
  { name: "Novos", value: 67 },
];

const COLORS = ["#1E5EFF", "#6EA8FF"];

export default function PacientesDoDia() {
  return (
    <Card>
      <Title>Pacientes do Dia</Title>

      <PieChart width={300} height={230}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          label={({ percent = 0 }) => `${(percent * 100).toFixed(0)}%`} // <- FIX
        >
          {data.map((_, idx) => (
            <Cell key={idx} fill={COLORS[idx]} />
          ))}
        </Pie>
      </PieChart>

      <LegendContainer>
        {data.map((item, idx) => (
          <div key={idx} className="legend">
            <span className="dot" style={{ background: COLORS[idx] }} />
            {item.name}
          </div>
        ))}
      </LegendContainer>
    </Card>
  );
}
