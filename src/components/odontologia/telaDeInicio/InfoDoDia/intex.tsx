import { 
    DivDeInformacoes, 
    DivPrincipal, 
    Divsecuncaria, 
    TextoTitulo, 
    Numero, 
    TextoDescricao, 
    Icone 
} from "./style";

import { FaCalendarCheck, FaUserCheck, FaUserMd, FaTimesCircle } from "react-icons/fa";

export default function InformacaoDoDia() {
    return (
        <DivPrincipal>
            <TextoTitulo>Informações do Dia</TextoTitulo>

            <Divsecuncaria>
                
                <DivDeInformacoes>
                    <Numero>5</Numero>
                    <TextoDescricao>Pacientes Agendados</TextoDescricao>
                    <Icone><FaCalendarCheck /></Icone>
                </DivDeInformacoes>

                <DivDeInformacoes>
                    <Numero>2</Numero>
                    <TextoDescricao>Pacientes Confirmados</TextoDescricao>
                    <Icone><FaUserCheck color="#23CC37"/></Icone>
                </DivDeInformacoes>

                <DivDeInformacoes>
                    <Numero>11</Numero>
                    <TextoDescricao>Pacientes Atendidos</TextoDescricao>
                    <Icone><FaUserMd /></Icone>
                </DivDeInformacoes>

                <DivDeInformacoes>
                    <Numero>5</Numero>
                    <TextoDescricao>Pacientes que Faltaram</TextoDescricao>
                    <Icone><FaTimesCircle color="red" /></Icone>
                </DivDeInformacoes>

            </Divsecuncaria>
        </DivPrincipal>
    );
}
