import { useNavigate } from "react-router-dom";
import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";

import {
    ConteudoRolavel,
    DivConteinerPrincipal,
    BotaoVoltar,
    DivSecundaria,
    TituloDaPagina,
    LinhaDupla,
    LinhaSimples
} from "./style";
import CardFotoPaciente from "./CardFotoPaciente/intex";
import CampoInfo from "./CampoInfo/intex";
import HistoricoMedico from "./HistoricoMedico/intex";
import BotoesAcoes from "./BotoesAcoes/intex";

export default function VisualizacaoDeDadosPaciente() {
    
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

                    <TituloDaPagina>
                        Visualização de Paciente
                    </TituloDaPagina>

                    {/* FOTO + PRIMEIRO BLOCO */}
                    <LinhaDupla>
                        <CardFotoPaciente />

                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "18px" }}>
                            <CampoInfo label="Nome do Pet:" valor="Bob" />
                            <LinhaSimples>
                                <CampoInfo label="Idade do Pet:" valor="2 anos e 5 meses" />
                                <CampoInfo label="Sexo do Pet:" valor="Masculino" />
                            </LinhaSimples>

                            <LinhaSimples>
                                <CampoInfo label="Castrado:" valor="Não" />
                                <CampoInfo label="Espécie:" valor="Canina" />
                            </LinhaSimples>

                            <LinhaSimples>
                                <CampoInfo label="Data da última Pesagem:" valor="04/01/2025" />
                                <CampoInfo label="Peso do Pet:" valor="20,45 Kg" />
                            </LinhaSimples>

                            <LinhaSimples>
                                <CampoInfo label="Parasitas:" valor="Não" />
                                <CampoInfo label="Vermifugado:" valor="Não" />
                            </LinhaSimples>
                        </div>
                    </LinhaDupla>

                    {/* TUTOR */}
                    <LinhaDupla>
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "18px" }}>
                            <CampoInfo label="Nome do Tutor:" valor="Lucas Vieira da Silva" />
                            <CampoInfo label="CEP do Tutor:" valor="64074-420" />
                            <CampoInfo label="Cidade:" valor="Teresina" />
                            <CampoInfo label="Telefone de Contato:" valor="(xx) xxxxx-xxxx" />
                        </div>

                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "18px" }}>
                            <CampoInfo label="CPF do Tutor:" valor="075.0**.***-*0" />
                            <CampoInfo label="Bairro:" valor="Porto Alegre" />
                            <CampoInfo label="Estado:" valor="Piauí" />
                            <CampoInfo label="Observações:" valor="--------------" grande />
                        </div>
                    </LinhaDupla>

                    {/* MEDICAÇÕES */}
                    <CampoInfo
                        label="Medicações em uso:"
                        grande
                        valor={
                            "Antipulgas: Simparic - 1 vez por mês\n" +
                            "Antipulgas: Simparic - 1 vez por mês\n" +
                            "Antipulgas: Simparic - 1 vez por mês"
                        }
                    />

                    {/* HISTÓRICO MÉDICO */}
                    <HistoricoMedico />

                    {/* BOTÕES */}
                    <BotoesAcoes />

                </DivSecundaria>
            </ConteudoRolavel>
        </DivConteinerPrincipal>
    );
}
