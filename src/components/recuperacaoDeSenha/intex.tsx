import { 
    DivConteinerGeral, 
    DivConteinerSecundario,
    Image,
    Txt,
    Txt2,
    Txt3
} from "./style";
import ImageLogo1 from "../../assets/images/lock.png"
import { Input } from "./input/intex";
import { Butao } from "./butao/intex";

export default function RecuperacaoDeSenhaComponentes() {
    return(
        <DivConteinerGeral>

            <DivConteinerSecundario>
                <Image src={ImageLogo1}/>
                <Txt>Recuperação de senha</Txt>
                <Txt2>
                    Digite sua nova senha abaixo para acessar o aplicativo.
                </Txt2>
                <Input textos="Digite sua nova senha"/>
                <Txt3/>
                <Input textos="Digite novamente sua nova senha"/>
                <Butao />
            </DivConteinerSecundario>
            
        </DivConteinerGeral>
    );
}