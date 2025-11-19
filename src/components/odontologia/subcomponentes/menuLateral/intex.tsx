import { useState } from "react";
import { Butao, DivButaoPagina, DivConteinerMenuLateral, IconButton, Textobutao } from "./style";

interface PropsMenu {
    text1: string,
    text2: string,
    text3: string,
    text4: string,
    text5: string,
    text6: string,
    imagem1: string,
    imagem2: string,
    imagem3: string,
    imagem4: string,
    imagem5: string,
    imagem6: string,
}

export default function MenuLateral(props:PropsMenu) {

    const [ativo, setAtivo] = useState<number | null>(null);

    return(
        <DivConteinerMenuLateral>
            <DivButaoPagina>
                <IconButton src={props.imagem1}/> 
                <Butao active={ativo === 1} onClick={() => setAtivo(1)}>
                    <Textobutao active={ativo === 1}>
                        {props.text1}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>
            <DivButaoPagina>
                <IconButton src={props.imagem2}/> 
                <Butao active={ativo === 2} onClick={() => setAtivo(2)}>
                    <Textobutao active={ativo === 2}>
                        {props.text2}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>
            <DivButaoPagina>
                <IconButton src={props.imagem3}/> 
                <Butao active={ativo === 3} onClick={() => setAtivo(3)}>
                    <Textobutao active={ativo === 3}>
                        {props.text3}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>
            <DivButaoPagina>
                <IconButton src={props.imagem4}/> 
                <Butao active={ativo === 4} onClick={() => setAtivo(4)}>
                    <Textobutao active={ativo === 4}>
                        {props.text4}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>
            <DivButaoPagina>
                <IconButton src={props.imagem5}/> 
                <Butao active={ativo === 5} onClick={() => setAtivo(5)}>
                    <Textobutao active={ativo === 5}>
                        {props.text5}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>
            <DivButaoPagina>
                <IconButton src={props.imagem6}/> 
                <Butao active={ativo === 6} onClick={() => setAtivo(6)}>
                    <Textobutao active={ativo === 6}>
                        {props.text6}
                    </Textobutao>
                </Butao>
            </DivButaoPagina>
        </DivConteinerMenuLateral>
    );
}