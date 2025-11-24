import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";
import MenuLateral from "../subcomponentes/menuLateral/intex";
import { ConteudoRolavel, DivConteinerPrincipal } from "../telaDeInicio/style";
import FiltrosRelatorios from "./FiltrosRelatorios/intex";
import HistoricoFinanceiro from "./HistoricoFinanceiro/intex";
import { DivConteinerSecundario } from "./style";
import TabelaContasAPagar from "./TabelaContasAPagar/intex";
import TabelaContasAReceber from "./TabelaContasAReceber/intex";
import TabelaRecebimentos from "./TabelaRecebimentos/intex";

export default function Financeiro() {
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
                <DivConteinerSecundario>
                    <FiltrosRelatorios/>
                    <HistoricoFinanceiro/> 
                    <TabelaContasAPagar />
                    <TabelaContasAReceber/>
                    <TabelaRecebimentos />
                </DivConteinerSecundario>
            </ConteudoRolavel>
        </DivConteinerPrincipal>
    );
}