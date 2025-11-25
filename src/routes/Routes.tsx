import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import EsqueceuSenha from "../pages/esqueceuSenha";
import RecuperacaoDeSenha from "../pages/recuperacaoDeSenha";
import SelecaoDeClinicas from "../pages/seleçaoDeClinicas";
import InicioOdontologia from "../pages/odontologia/inicioOdontologia";
import Paciente from "../components/odontologia/pacientes/intex";
import Relatorios from "../components/odontologia/relatorios/intex";
import Agenda from "../components/odontologia/agenda/intex";
import Financeiro from "../components/odontologia/financeiro/intex";
import Configuracoes from "../components/odontologia/configuracoes/intex";
import NovaFichaDePaciente from "../components/odontologia/NovaFichaDePaciente/intex";
import HistoricoDePaciente from "../components/odontologia/HistoricoDePaciente/intex";
import VisualizacaoDeDadosPaciente from "../components/odontologia/VisualizacaoDeDadosPaciente/intex";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home url="https://igornalves.github.io/LadingPage_Projeto-Uniclinicas/"/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
            <Route path="/recuperacao-de-senha" element={<RecuperacaoDeSenha />} />
            <Route path="/selecao-clinica" element={<SelecaoDeClinicas />} />
            <Route path="/odontologia/tela-inicio" element={<InicioOdontologia />} />
            <Route path="/odontologia/paciente" element={<Paciente />} />
            <Route path="/odontologia/relatorios" element={<Relatorios />} />
            <Route path="/odontologia/agenda" element={<Agenda />} />
            <Route path="/odontologia/financeiro" element={<Financeiro />} />
            <Route path="/odontologia/configuracoes" element={<Configuracoes />} />
            <Route path="/odontologia/nova-ficha" element={<NovaFichaDePaciente />} />
            <Route path="/odontologia/historico-paciente" element={<HistoricoDePaciente />} />
            <Route path="/odontologia/visualizacao-paciente" element={<VisualizacaoDeDadosPaciente/>} />
        </Routes>
    )
}
