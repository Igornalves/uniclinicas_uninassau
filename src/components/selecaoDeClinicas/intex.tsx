import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { 
    ButaoDeSelecao, 
    DivConteinerPrincipal, 
    DivConteinerSecundaria, 
    Imagem, 
    TextoTitulo 
} from "./style";

import img1 from '../../assets/images/Imagem_do_WhatsApp_de_2025-08-13_à_s__21.54.56_e82cac74-removebg-preview 1.png'
import img2 from '../../assets/images/Imagem_do_WhatsApp_de_2025-08-18_à_s__10.16.46_1e3cd122-removebg-preview 1.png'
import img3 from '../../assets/images/Imagem_do_WhatsApp_de_2025-08-18_à_s__10.16.48_70b2e0e2-removebg-preview 1.png'

export default function SelecaoDeClinicasComponent() {

    const navigate = useNavigate();
    const location = useLocation();

    const [selecionado, setSelecionado] = useState<number | null>(null);

    const rota = location.pathname; // segue mesmo padrão do MenuLateral

    function handleClick(id: number) {
        setSelecionado(id);

        // mesma estrutura que você usa no menu
        navigate("/odontologia/tela-inicio");
    }

    return(
        <DivConteinerPrincipal>
            <TextoTitulo>Escolha entre as Clínicas para Entrar no Sistema</TextoTitulo>

            <DivConteinerSecundaria>

                {/* Clínica 1 */}
                <ButaoDeSelecao 
                    ativo={selecionado === 1}
                    onClick={() => handleClick(1)}
                >
                    <Imagem src={img1} />
                </ButaoDeSelecao>

                {/* Clínica 2 */}
                <ButaoDeSelecao 
                    ativo={selecionado === 2}
                    onClick={() => handleClick(2)}
                >
                    <Imagem src={img2} />
                </ButaoDeSelecao>

                {/* Clínica 3 */}
                <ButaoDeSelecao 
                    ativo={selecionado === 3}
                    onClick={() => handleClick(3)}
                >
                    <Imagem src={img3} />
                </ButaoDeSelecao>

            </DivConteinerSecundaria>
        </DivConteinerPrincipal>
    );
}
