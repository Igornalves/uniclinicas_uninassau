import { useState } from "react";

import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";
import MenuLateral from "../subcomponentes/menuLateral/intex";
import { ConteudoRolavel, DivConteinerPrincipal } from "../telaDeInicio/style";

import AcoesGerais from "./AcoesGerais/intex";
import CamposSistema from "./CamposSistema";
import CamposUsuario from "./CamposUsuario";
import FotoPerfil from "./FotoPerfil";

import { ContainerGeral, Linha } from "./style";

export default function Configuracoes() {

    // 🔥 Estado único para controlar edição de TUDO
    const [editando, setEditando] = useState(false);

    // Alterna entre editar / salvar
    const toggleEdicao = () => setEditando(prev => !prev);

    return (
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
                    <Linha>
                        <FotoPerfil editando={editando}/>
                        <CamposUsuario editando={editando} />
                        <CamposSistema editando={editando} />
                    </Linha>
                    <AcoesGerais 
                        editando={editando}
                        toggleEdicao={toggleEdicao}
                    />

                </ContainerGeral>
            </ConteudoRolavel>

        </DivConteinerPrincipal>
    );
}
