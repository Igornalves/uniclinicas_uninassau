import { Container, Title } from "./style";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Consultas", valor: 650 },
    { name: "Exames", valor: 850 },
    { name: "Internar", valor: 1000 }
];

export default function GraficoReceitaMensal() {
    return (
        <Container>
            <Title>Receita Mensal</Title>

            <ResponsiveContainer width={550} height={240}>
                <BarChart data={data} style={{marginRight: 30}}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="valor" fill="#2563eb" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
}
