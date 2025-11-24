import GraficosRelatorios from "./GraficosRelatorios/intex";
import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";
import MenuLateral from "../subcomponentes/menuLateral/intex";
import { ConteudoRolavel, DivConteinerPrincipal } from "../telaDeInicio/style";
import { DivConteinerQuarta, DivConteinerSegundario, DivConteinerTerceiro } from "./style";
import CardInfo from "./CardInfo/intex";
import GraficoFluxo from "./GraficoFluxo/intex";
import GraficoReceitaMensal from "./GraficoReceitaMensal/intex";
import GraficoCategoria from "./GraficoCategoria/intex";
import GraficoComparacaoMensal from "./GraficoComparacaoMensal/intex";
import CardValor from "./CardValor/intex";

export default function Relatorios() {
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
                <CardInfo /> 
                <DivConteinerSegundario>
                    <GraficosRelatorios />
                </DivConteinerSegundario>
                <CardValor />
                <DivConteinerTerceiro>
                    <GraficoFluxo />
                    <GraficoReceitaMensal/>
                </DivConteinerTerceiro>
                <DivConteinerQuarta>
                    <GraficoCategoria/>
                    <GraficoComparacaoMensal />
                </DivConteinerQuarta>
            </ConteudoRolavel>
        </DivConteinerPrincipal>
    );
}