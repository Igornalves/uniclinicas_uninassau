import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import EsqueceuSenha from "../pages/esqueceuSenha";
import RecuperacaoDeSenha from "../pages/recuperacaoDeSenha";

export default function Router(){
    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/login" Component={Login}/>
            <Route path="/cadastro" Component={Cadastro}/>
            <Route path="/esqueceu-senha" Component={EsqueceuSenha}/>
            <Route path="/recuperacao-de-senha" Component={RecuperacaoDeSenha}/>
        </Routes>
    )
}