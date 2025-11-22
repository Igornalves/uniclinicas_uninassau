import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import EsqueceuSenha from "../pages/esqueceuSenha";
import RecuperacaoDeSenha from "../pages/recuperacaoDeSenha";
import SelecaoDeClinicas from "../pages/seleçaoDeClinicas";
import InicioOdontologia from "../pages/odontologia/inicioOdontologia";

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
        </Routes>
    )
}