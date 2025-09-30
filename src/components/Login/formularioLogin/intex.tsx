import { DivConteiner, IconesSuperiores, IconesInferiores, TextLine, DivInterna, Input, LabelInput, Button, DivIcones, DivGeral, Background, Link } from "./style";

export default function FormularioLogin(){
    return(
        <DivGeral>
            <DivConteiner>
                <IconesSuperiores src="/assets/icones.png" alt="Icones"/>
                <DivInterna>
                    <TextLine>
                        Entrar na conta
                    </TextLine>

                    <LabelInput htmlFor="email">Digite o seu email</LabelInput>
                    <Input type="email" id="email" placeholder="Email"/>

                    <LabelInput htmlFor="senha">Senha</LabelInput>
                    <Input type="password" id="senha" placeholder="Senha"/>
                    <Link esqueceuSenha>Esqueceu a senha?</Link>

                    <Button>Entrar</Button>

                    <TextLine textoAlternativo>
                        OU CONTINUAR COM
                    </TextLine>

                    <DivIcones>
                        <IconesInferiores src="/assets/Icon-Google.png" alt="Icone google"/>
                        <IconesInferiores src="/assets/Icon-Facebook.png" alt="Icone   facebook"/>
                        <IconesInferiores src="/assets/Icon-Email.png" alt="Icone email"/>
                    </DivIcones>

                    <TextLine textoAlternativo>
                        Não tem uma conta? <Link>Crie uma agora mesmo</Link>
                    </TextLine>

                </DivInterna>
            </DivConteiner>
            <Background src="/assets/cosulta.jpg" alt="Background"/>
        </DivGeral>
    )
}
