import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";

export default function Router(){
    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/login" Component={Login}/>
        </Routes>
    )
}