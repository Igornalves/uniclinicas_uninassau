import { useNavigate } from "react-router-dom";
import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";
import FichaCadastroPaciente from "./FichaCadastroPaciente/intex";
import { ConteudoRolavel, DivConteinerPrincipal, BotaoVoltar } from "./style";

export default function NovaFichaDePaciente() {
    
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

                <FichaCadastroPaciente />

            </ConteudoRolavel>
        </DivConteinerPrincipal>
    );
}
