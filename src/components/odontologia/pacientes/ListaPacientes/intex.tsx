import { 
    ContainerPage,
    Lista,
    Card,
    FotoAnimal,
    InfoAnimal,
    TituloAnimal,
    LinhaInfo,
    StatusArea,
    Etiqueta,
    DonoArea,
    BotaoVisualizar,
    TextTituloDados
} from "./style";

import { dadosPacientes } from "./dados";
import { useNavigate } from "react-router-dom";

export default function ListaPacientes() {

    const navigate = useNavigate();
    
    function irParaVisualizacao() {
        navigate("/odontologia/visualizacao-paciente");
    }
    
    return (
        <ContainerPage>
            <Lista>
                {dadosPacientes.map((item) => (
                    <Card key={item.id}>

                        <FotoAnimal src={item.foto} />

                        <InfoAnimal>
                            <TituloAnimal>{item.nome}</TituloAnimal>

                            <LinhaInfo>Raça: {item.raca}</LinhaInfo>
                            <LinhaInfo>Sexo: {item.sexo}</LinhaInfo>
                            <LinhaInfo>Peso: {item.peso}</LinhaInfo>
                            <LinhaInfo>Idade: {item.idade}</LinhaInfo>
                            <LinhaInfo>{item.fertil}</LinhaInfo>
                        </InfoAnimal>

                        <StatusArea>
                            <TextTituloDados>Status: </TextTituloDados>
                            <Etiqueta tipo="vermelho">{item.status}</Etiqueta>

                            <TextTituloDados>Caracteristicas: </TextTituloDados>
                            {item.caracteristicas.map((car, index) => (
                                <Etiqueta tipo="verde" key={index}>
                                    {car}
                                </Etiqueta>
                            ))}
                        </StatusArea>

                        <DonoArea>
                            <p><strong>{item.dono}</strong></p>
                            <p>{item.endereco}</p>
                            <p>Telefone: {item.telefone}</p>
                        </DonoArea>

                        <BotaoVisualizar onClick={irParaVisualizacao}>
                            👁 Visualizar
                        </BotaoVisualizar>

                    </Card>
                ))}
            </Lista>
        </ContainerPage>
    );
}
