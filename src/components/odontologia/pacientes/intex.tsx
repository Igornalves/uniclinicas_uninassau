import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";
import MenuLateral from "../subcomponentes/menuLateral/intex";
import { ConteudoRolavel, DivConteinerPrincipal } from "../telaDeInicio/style";
import BarraPesquisa from "./BarraPesquisa/intex";
import ListaPacientes from "./ListaPacientes/intex";
import { ContainerGeral } from "./style";

export default function Paciente() {
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
            <ContainerGeral>
                <BarraPesquisa />
                <ListaPacientes />
            </ContainerGeral>
          </ConteudoRolavel>
        </DivConteinerPrincipal>
    );
}