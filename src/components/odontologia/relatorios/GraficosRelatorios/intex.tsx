import { ContainerGraficos, CardGrafico, Titulo } from "./style";

import {
    LineChart, Line, XAxis, YAxis, Tooltip,
    BarChart, Bar, Legend
} from "recharts";

const receitaData = [
    { mes: "Janeiro", valor: 5000 },
    { mes: "Fevereiro", valor: 6500 },
    { mes: "Março", valor: 6500 },
    { mes: "Abril", valor: 8000 },
    { mes: "Maio", valor: 8000 },
    { mes: "Junho", valor: 6500 },
    { mes: "Julho", valor: 6500 },
];

const fluxoData = [
    { mes: "Jan", despesas: 7000, exames: 4000 },
    { mes: "Fev", despesas: 6500, exames: 4200 },
    { mes: "Mar", despesas: 8000, exames: 5000 },
    { mes: "Abr", despesas: 5000, exames: 4500 },
    { mes: "Mai", despesas: 7800, exames: 6200 },
    { mes: "Jun", despesas: 6000, exames: 3800 },
];

export default function GraficosRelatorios() {
    return (
        <ContainerGraficos>

            <CardGrafico>
                <Titulo>Evolução da Receita</Titulo>

                <LineChart width={550} height={250} data={receitaData}>
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="valor" stroke="#8b5cf6" strokeWidth={3} />
                </LineChart>
            </CardGrafico>

            <CardGrafico>
                <Titulo>Fluxo de Caixa</Titulo>

                <BarChart width={550} height={250} data={fluxoData}>
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="despesas" fill="#3b82f6" />
                    <Bar dataKey="exames" fill="#ef4444"/>
                </BarChart>
            </CardGrafico>

        </ContainerGraficos>
    );
}
