import { useNavigate } from "react-router-dom";
import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";

import { 
    BotaoVoltar,
    ConteudoRolavel, 
    DivConteinerPrincipal,
    Titulo,
    LinhaTopo,
    DivSecundaria
} from "./style";

import BarraDeBusca from "./BarraDeBusca";
import BotaoEmitirImprimir from "./BotaoEmitirImprimir";
import BotaoFiltro from "./BotaoFiltro";
import TabelaHistorico from "./TabelaHistorico";

export default function HistoricoDePaciente() {

    const navigate = useNavigate();
    function voltarPagina() {
        navigate("/odontologia/paciente");
    }

    return (
        <DivConteinerPrincipal>

            <MenuHorizontalCima />

            <ConteudoRolavel>

                <BotaoVoltar onClick={voltarPagina}>
                    ⟸ Voltar
                </BotaoVoltar>

                <DivSecundaria>
                    <Titulo>Histórico de Pacientes</Titulo>

                    <LinhaTopo>
                        <BarraDeBusca />
                        <BotaoEmitirImprimir />
                        <BotaoFiltro />
                    </LinhaTopo>

                    <TabelaHistorico />
                </DivSecundaria>

            </ConteudoRolavel>

        </DivConteinerPrincipal>
    );
}
