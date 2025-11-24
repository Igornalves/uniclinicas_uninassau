import { Container, Card, Title, Value, IconArea } from "./style";
import { FiTrendingUp, FiTrendingDown, FiBarChart2 } from "react-icons/fi";

export default function CardInfo() {
    return (
        <Container>

            <Card>
                <Title>Total Entradas</Title>
                <IconArea>
                    <FiTrendingUp size={22} />
                </IconArea>
                <Value verde>R$ 2.300,00</Value>
            </Card>

            <Card>
                <Title>Total Saldos</Title>
                <IconArea>
                    <FiTrendingDown size={22} />
                </IconArea>
                <Value vermelho>R$ 1.150,00</Value>
            </Card>

            <Card>
                <Title>Saldo Atual</Title>
                <IconArea>
                    <FiBarChart2 size={22} />
                </IconArea>
                <Value azul>R$ 1.376,13</Value>
            </Card>

        </Container>
    );
}
