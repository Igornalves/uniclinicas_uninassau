import MenuHorizontalCima from "../subcomponentes/menuHorizontalCima/intex";
import MenuLateral from "../subcomponentes/menuLateral/intex";
import { DivConteinerPrincipal } from "./style";
import img1 from "../../../assets/casa 1.png";
import img2 from "../../../assets/pessoa 1.png"
import img3 from "../../../assets/Gráficos.png"
import img4 from "../../../assets/agendar 1.png"
import img5 from "../../../assets/icone Financeiro.png"
import img6 from "../../../assets/Config.png"


export default function TelaDeInicio() {
    return(
        <DivConteinerPrincipal>
            <MenuHorizontalCima />
            <MenuLateral 
                imagem1={img1} 
                text1="Início"
                imagem2={img2}
                text2="Paciente"
                imagem3={img3}
                text3="Relatórios"
                imagem4={img4}
                text4="Agenda"
                imagem5={img5}
                text5="Financeiro"
                imagem6={img6}
                text6="Configurações"
            /> 
            
        </DivConteinerPrincipal>
    );
}
