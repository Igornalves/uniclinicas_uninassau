import { 
    DivConteiner, 
    IconesSuperiores, 
    IconesInferiores, 
    TextLine, 
    DivInterna, 
    Input, 
    LabelInput, 
    Button, 
    DivIcones, 
    DivGeral, 
    Background, 
    Link 
} from "./style";

import { useNavigate } from "react-router-dom";

export default function FormularioLoginComponentes() {

    const navigate = useNavigate();

    function entrar() {
        navigate("/selecao-clinica");
    }

    return (
        <DivGeral>
            <DivConteiner>
                <IconesSuperiores src="/assets/icones.png" alt="Icones"/>
                <DivInterna>
                    <TextLine>
                        Entrar na conta
                    </TextLine>

                    <LabelInput htmlFor="email">Digite o seu Email</LabelInput>
                    <Input type="email" id="email" placeholder="Email"/>

                    <LabelInput htmlFor="senha">Digite a sua Senha</LabelInput>
                    <Input type="password" id="senha" placeholder="Senha"/>

                    <Link esqueceuSenha href="/esqueceu-senha">Esqueceu a senha?</Link>

                    <Button onClick={entrar}>Entrar</Button>

                    <TextLine textoAlternativo>
                        OU CONTINUAR COM
                    </TextLine>

                    <DivIcones>
                        <IconesInferiores src="/assets/Icon-Google.png" alt="Icone google"/>
                        <IconesInferiores src="/assets/Icon-Facebook.png" alt="Icone facebook"/>
                        <IconesInferiores src="/assets/Icon-Email.png" alt="Icone email"/>
                    </DivIcones>

                    <TextLine textoAlternativo>
                        Não tem uma conta? <Link href="/cadastro">Crie uma agora mesmo</Link>
                    </TextLine>

                </DivInterna>
            </DivConteiner>
            <Background src="/assets/cosulta.jpg" alt="Background"/>
        </DivGeral>
    );
}
