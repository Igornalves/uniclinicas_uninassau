import { 
    DivConteinerGeral, 
    DivSecundariaConteudo, 
    Image, 
    Txt, 
    Txt2 
} from "./style";
import ImageLogo1 from "../../assets/images/lock.png"
import { Input } from "./input/intex";
import { Butao } from "./butao/intex";

export default function EsqueceuSenhaComponente(){
    return(
        <DivConteinerGeral>

            <DivSecundariaConteudo>
                <Image src={ImageLogo1}/>
                <Txt>Esqueceu a Senha ?</Txt>
                <Txt2>
                    Iremos lhe enviar um e-mail com um link para redefinir sua 
                    <br/>senha, digite o email associado a sua conta abaixo.
                </Txt2>
                <Input />
                <Butao />
            </DivSecundariaConteudo>
            
        </DivConteinerGeral>
    );
}