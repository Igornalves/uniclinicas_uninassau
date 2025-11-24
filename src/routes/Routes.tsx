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

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home url="https://igornalves.github.io/LadingPage_Projeto-Uniclinicas/"/>}/>
            <Route path="/login" Component={Login}/>
            <Route path="/cadastro" Component={Cadastro}/>
            <Route path="/esqueceu-senha" Component={EsqueceuSenha}/>
            <Route path="/recuperacao-de-senha" Component={RecuperacaoDeSenha}/>
            <Route path="/selecao-clinica" Component={SelecaoDeClinicas}/>
            <Route path="/odontologia/tela-inicio" Component={InicioOdontologia}/>
            <Route path="/odontologia/paciente" Component={Paciente}/>
            <Route path="/odontologia/relatorios" Component={Relatorios}/>
            <Route path="/odontologia/agenda" Component={Agenda}/>
            <Route path="/odontologia/financeiro" Component={Financeiro}/>
            <Route path="/odontologia/configuracoes" Component={Configuracoes}/>
        </Routes>
    )
}