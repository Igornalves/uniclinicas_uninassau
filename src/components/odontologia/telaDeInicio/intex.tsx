import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";
import MenuLateral from "../subcomponentes/menuLateral/intex";
import { ButaoAtendimento, ConteudoRolavel, DivButaoIcons, DivConteinerGraficos, DivConteinerPrincipal, ImagemIconAtendimento } from "./style";
import InformacaoDoDia from "./InfoDoDia/intex";

import imgIcon from "../../../assets/atendimento.png"
import imgIcon2 from "../../../assets/alterar.png"
import imgIcon3 from "../../../assets/impressao.png"
import SalaDeEspera from "./SalaDeEspera/intex";
import ProcedimentosDia from "./ProcedimentosDia/intex";
import PacientesDoDia from "./PacientesDoDia/intex";

export default function TelaDeInicio() {
    return(
        <DivConteinerPrincipal>
            <MenuHorizontalCima />
            <MenuLateral 
                text1="Início"
                text2="Paciente"
                text3="Agenda"
                text4="Relatórios"
                text5="Financeiro"
                text6="Configurações"
            /> 
            <ConteudoRolavel>
                <DivButaoIcons>
                    <ButaoAtendimento>
                        <ImagemIconAtendimento src={imgIcon}/> 
                        Novo Atendimento 
                    </ButaoAtendimento>
                    <ButaoAtendimento>
                        <ImagemIconAtendimento src={imgIcon2}/> 
                        Alterar / Consultar 
                    </ButaoAtendimento>
                    <ButaoAtendimento>
                        <ImagemIconAtendimento src={imgIcon3}/> 
                        Emitir / Imprimir
                    </ButaoAtendimento>
                </DivButaoIcons>
                <InformacaoDoDia/>
                <DivConteinerGraficos>
                    <PacientesDoDia />
                    <ProcedimentosDia />
                    <SalaDeEspera />
                </DivConteinerGraficos>
            </ConteudoRolavel>
        </DivConteinerPrincipal>
    );
}
