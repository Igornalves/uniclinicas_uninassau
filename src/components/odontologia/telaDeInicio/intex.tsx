import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";
import MenuLateral from "../subcomponentes/menuLateral/intex";
import { DivConteinerPrincipal } from "./style";

export default function TelaDeInicio() {
    return(
        <DivConteinerPrincipal>
            <MenuHorizontalCima />
            <MenuLateral /> 
        </DivConteinerPrincipal>
    );
}
