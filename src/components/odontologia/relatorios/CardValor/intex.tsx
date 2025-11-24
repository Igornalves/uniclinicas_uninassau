import { Container, Card, Title, Value } from "./style";

export default function CardValor() {
    return (
        <Container>
            <Card>
                <Title>Ticket Médio</Title>
                <Value verde>+ R$ 180,00</Value>
            </Card>

            <Card>
                <Title>Despesas Mensais</Title>
                <Value vermelho>- R$ 2.200,00</Value>
            </Card>
        </Container>
    );
}
