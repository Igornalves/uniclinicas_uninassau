import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";
import MenuLateral from "../subcomponentes/menuLateral/intex";
import { ButaoAtendimento, ConteudoRolavel, DivButaoIcons, DivConteinerPrincipal, ImagemIconAtendimento } from "./style";
import img1 from "../../../assets/casa 1.png";
import img2 from "../../../assets/pessoa 1.png"
import img3 from "../../../assets/Gráficos.png"
import img4 from "../../../assets/agendar 1.png"
import img5 from "../../../assets/icone Financeiro.png"
import img6 from "../../../assets/Config.png"
import InformacaoDoDia from "../subcomponentes/InfoDoDia/intex";

import imgIcon from "../../../assets/atendimento.png"
import imgIcon2 from "../../../assets/alterar.png"
import imgIcon3 from "../../../assets/impressao.png"

export default function TelaDeInicio() {
    return(
        <DivConteinerPrincipal>
            <MenuHorizontalCima />
            <MenuLateral 
                imagem1={img1} 
                text1="Início"
                imagem2={img2}
                text2="Paciente"
                imagem3={img3}
                text3="Relatórios"
                imagem4={img4}
                text4="Agenda"
                imagem5={img5}
                text5="Financeiro"
                imagem6={img6}
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
            </ConteudoRolavel>
        </DivConteinerPrincipal>
    );
}
