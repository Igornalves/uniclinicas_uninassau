import { 
    Container, 
    Foto, 
    InfoEsquerda, 
    InfoDireita, 
    Nome, 
    Linha, 
    TagStatus, 
    TagCarac, 
    Botao 
} from "./style";

interface Props {
    nome: string;
    raca: string;
    sexo: string;
    peso: string;
    idade: string;
    status: string;
    caracteristicas: string[];
    dono: string;
    endereco: string;
    telefone: string;
    foto: string;
}

export default function CardPaciente(props: Props) {
    return (
        <Container>
            <Foto src={props.foto} />

            <InfoEsquerda>
                <Nome>{props.nome}</Nome>

                <Linha>Raça: {props.raca}</Linha>
                <Linha>Sexo: {props.sexo}</Linha>
                <Linha>Peso: {props.peso}</Linha>
                <Linha>Idade: {props.idade}</Linha>

                <Linha>Fértil</Linha>
            </InfoEsquerda>

            <InfoDireita>
                <TagStatus>{props.status}</TagStatus>

                <h4>Características:</h4>

                {props.caracteristicas.map((c) => (
                    <TagCarac key={c}>{c}</TagCarac>
                ))}

                <Linha>{props.dono}</Linha>
                <Linha>{props.endereco}</Linha>
                <Linha>{props.telefone}</Linha>
            </InfoDireita>

            <Botao>👁 Visualizar</Botao>
        </Container>
    );
}
