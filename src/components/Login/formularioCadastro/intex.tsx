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
    Background 
} from "./style";
import { useNavigate } from "react-router-dom";

export default function FormularioCadastroComponente(){

    const navigate = useNavigate();

    function criarConta() {
        navigate("/login");
    }

    return(
        <DivGeral>
            <DivConteiner>
                <IconesSuperiores src="/assets/icones.png" alt="Icones"/>
                <DivInterna>
                    <TextLine>
                        Preencha os dados no formulário abaixo
                    </TextLine>

                    <LabelInput htmlFor="nome">Digite o seu nome</LabelInput>
                    <Input type="text" id="nome" placeholder="Nome"/>

                    <LabelInput htmlFor="email">Digite o seu email</LabelInput>
                    <Input type="email" id="email" placeholder="Email"/>

                    <LabelInput htmlFor="telefone">Digite seu número de telefone</LabelInput>
                    <Input type="tel" id="telefone" placeholder="Telefone"/>

                    <LabelInput htmlFor="cpf">Informe o seu CPF</LabelInput>
                    <Input type="text" id="cpf" placeholder="CPF"/>

                    <LabelInput htmlFor="senha">Senha</LabelInput>
                    <Input type="password" id="senha" placeholder="Senha"/>

                    <LabelInput htmlFor="confirmarSenha">Confirme sua senha</LabelInput>
                    <Input type="password" id="confirmarSenha" placeholder="Confirmar senha"/>

                    <Button onClick={criarConta}>Criar Conta</Button>

                    <TextLine textoAlternativo>
                        OU CONTINUAR COM
                    </TextLine>

                    <DivIcones>
                        <IconesInferiores src="/assets/Icon-Google.png" alt="Icone google"/>
                        <IconesInferiores src="/assets/Icon-Facebook.png" alt="Icone facebook"/>
                        <IconesInferiores src="/assets/Icon-Email.png" alt="Icone email"/>
                    </DivIcones>

                </DivInterna>
            </DivConteiner>
            <Background 
                src="/public/assets/equipe-de-jovens-medicos-especialistas-em-pe-no-corredor-hospital.jpg" 
                alt="Background"
            />
        </DivGeral>
    )
}
