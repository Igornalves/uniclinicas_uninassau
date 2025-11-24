import { Container, Title } from "./style";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Semana 1", valor: 2000 },
    { name: "Semana 2", valor: 1500 },
    { name: "Semana 3", valor: 1900 },
    { name: "Semana 4", valor: 500 }
];

export default function GraficoFluxo() {
    return (
        <Container>
            <Title>Fluxo de Caixa</Title>

            <ResponsiveContainer width={550} height={240}>
                <BarChart data={data} style={{marginRight:35}}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="valor" fill="#a855f7" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
}
