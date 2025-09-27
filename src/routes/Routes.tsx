import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";

export default function Router(){
    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/login" Component={Login}/>
            <Route path="/cadastro" Component={Cadastro}/>
        </Routes>
    )
}