import { ButaoDeSelecao, DivConteinerPrincipal, DivConteinerSecundaria, Imagem, TextoTitulo } from "./style";

import img1 from '../../assets/images/Imagem_do_WhatsApp_de_2025-08-13_à_s__21.54.56_e82cac74-removebg-preview 1.png'
import img2 from '../../assets/images/Imagem_do_WhatsApp_de_2025-08-18_à_s__10.16.46_1e3cd122-removebg-preview 1.png'
import img3 from '../../assets/images/Imagem_do_WhatsApp_de_2025-08-18_à_s__10.16.48_70b2e0e2-removebg-preview 1.png'
import { useState } from "react";

export default function SelecaoDeClinicasComponent() {

    const [selecionado, setSelecionado] = useState<number | null>(null);

    return(
        <DivConteinerPrincipal>
                <TextoTitulo>Escolha entre as Clinicas para Entra no Sistema</TextoTitulo>
                <DivConteinerSecundaria>
                    <ButaoDeSelecao
                        ativo={selecionado === 1}
                        onClick={() => setSelecionado(1)}
                    >
                        <Imagem src={img1}/>
                    </ButaoDeSelecao>
                    <ButaoDeSelecao
                        ativo={selecionado === 2}
                        onClick={() => setSelecionado(2)}
                    >
                        <Imagem src={img2}/>
                    </ButaoDeSelecao>
                    <ButaoDeSelecao
                        ativo={selecionado === 3}
                        onClick={() => setSelecionado(3)}
                    >
                        <Imagem src={img3}/>
                    </ButaoDeSelecao>
                </DivConteinerSecundaria>
        </DivConteinerPrincipal>
    );
}