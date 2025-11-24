import { PieChart, Pie, Cell } from "recharts";
import { Card, Title, LegendContainer } from "./style";

const data = [
  { name: "Consultas", value: 91 },
  { name: "Cirurgias", value: 31 },
  { name: "Exames", value: 27 },
];

const COLORS = ["#FFC107", "#1E5EFF", "#FF3E57"];

export default function ProcedimentosDia() {
  return (
    <Card>
      <Title>Procedimentos realizados do dia</Title>

      <PieChart width={300} height={230}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
          label={({ percent = 0 }) => `${(percent * 100).toFixed(0)}%`}
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
