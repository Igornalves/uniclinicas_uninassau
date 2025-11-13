import { 
    ButaoEnviar, 
    DivConteiner, 
    // RetornaImagem, 
    // RetornarButao, 
    // RetornaText, 
    TextoButao 
} from "./style";

// import img2 from "../../../assets/arrow_back.png"
// import { useNavigate } from "react-router-dom";

export function Butao(){
    // const navigate = useNavigate()

    return(
        <DivConteiner>
            <ButaoEnviar>
                <TextoButao>
                    Confirmar
                </TextoButao>
            </ButaoEnviar>
            {/* <RetornarButao onClick={() => navigate("/login")}>
                <RetornaImagem src={img2}/> 
                <RetornaText>Retorne ao Login</RetornaText>
            </RetornarButao> */}
        </DivConteiner>
    );
}