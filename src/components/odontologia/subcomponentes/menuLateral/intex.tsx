import { useLocation, useNavigate } from "react-router-dom";
import { 
    FaHome, 
    FaUser, 
    FaCalendarAlt, 
    FaClipboardList, 
    FaChartBar, 
    FaCog 
} from "react-icons/fa";

import { 
    Butao, 
    DivButaoPagina, 
    DivConteinerMenuLateral, 
    IconButton, 
    Textobutao 
} from "./style";

interface PropsMenu {
    text1: string,
    text2: string,
    text3: string,
    text4: string,
    text5: string,
    text6: string,
}

export default function MenuLateral(props: PropsMenu) {

    const navigate = useNavigate();
    const location = useLocation();

    // Verifica a rota ativa
    const rota = location.pathname;

    return (
        <DivConteinerMenuLateral>

            <DivButaoPagina onClick={() => navigate("/odontologia/tela-inicio")}>
                <IconButton>
                    <FaHome size={35} />
                </IconButton>
                <Butao active={rota === "/odontologia/tela-inicio"}>
                    <Textobutao active={rota === "/odontologia/tela-inicio"}>
                        {props.text1}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>

            <DivButaoPagina onClick={() => navigate("/odontologia/paciente")}>
                <IconButton>
                    <FaUser size={35} />
                </IconButton>
                <Butao active={rota === "/odontologia/paciente"}>
                    <Textobutao active={rota === "/odontologia/paciente"}>
                        {props.text2}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>

            <DivButaoPagina onClick={() => navigate("/odontologia/agenda")}>
                <IconButton>
                    <FaCalendarAlt size={35} />
                </IconButton>
                <Butao active={rota === "/odontologia/agenda"}>
                    <Textobutao active={rota === "/odontologia/agenda"}>
                        {props.text3}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>

            <DivButaoPagina onClick={() => navigate("/odontologia/relatorios")}>
                <IconButton>
                    <FaClipboardList size={35} />
                </IconButton>
                <Butao active={rota === "/odontologia/relatorios"}>
                    <Textobutao active={rota === "/odontologia/relatorios"}>
                        {props.text4}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>

            <DivButaoPagina onClick={() => navigate("/odontologia/financeiro")}>
                <IconButton>
                    <FaChartBar size={35} />
                </IconButton>
                <Butao active={rota === "/odontologia/financeiro"}>
                    <Textobutao active={rota === "/odontologia/financeiro"}>
                        {props.text5}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>

            <DivButaoPagina onClick={() => navigate("/odontologia/configuracoes")}>
                <IconButton>
                    <FaCog size={35} />
                </IconButton>
                <Butao active={rota === "/odontologia/configuracoes"}>
                    <Textobutao active={rota === "/odontologia/configuracoes"}>
                        {props.text6}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>

        </DivConteinerMenuLateral>
    );
}
