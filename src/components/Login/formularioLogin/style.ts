import styled, { css } from "styled-components";

interface TextLineProps extends React.HTMLAttributes<HTMLParagraphElement> {
    textoAlternativo?: boolean;
}

interface LinkProps extends React.HTMLAttributes<HTMLParagraphElement> {
    esqueceuSenha?: boolean;
}

export const DivGeral = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
`

export const Background = styled.img`
    width: calc(100% - 562px);
    height: 100vh;
    object-fit: cover;
`

export const DivConteiner = styled.div`
    width: 562px;
    height: 100vh;
    max-width: 100%;
    background-color: ${props => props.theme.cores.Yellow};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-right: 3px solid black;
    box-sizing: border-box;
`

export const IconesSuperiores = styled.img`
    width: 50%;
    height: auto;
    margin: 46px 0 35px 0;
    margin-top: 70px;
`

export const IconesInferiores= styled.img`
    width: auto;
    height: auto;
`

export const DivInterna = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom:50px;
`

export const DivIcones = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const Input = styled.input`
    width: 358px;
    height: 40px;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 18px;
    font-family: ${props => props.theme.fonts.jura};
    padding-left: 10px;
    box-shadow: 1px 4px 3px rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    &:hover {
      box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.15);
    }
`

export const LabelInput = styled.label`
    font-family: ${props => props.theme.fonts.jura};
    font-size: 18px;
    font-weight: 700;
    margin-top: 18px;
    margin-bottom: 10px;
    padding: 3px 0 0 7px;
    color: ${props => props.theme.cores.Black};
    align-self: flex-start;
`

export const TextLine = styled.p<TextLineProps>`
    font-family: ${props => props.theme.fonts.poppins};
    font-size: ${props => props.textoAlternativo ? '15px' : '40px'};
    font-weight: 700;
    text-align: center;

    ${props => props.textoAlternativo && css`
    color: ${props => props.theme.cores.Black};
    line-height: 1.1;
    margin: 30px 0 10px 0;
    `}
`

export const Button = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 11px;
    border: none;
    background-color: ${props => props.theme.cores.Backbuttom};
    color: ${props => props.theme.cores.White};
    font-size: 15px;
    font-family: ${props => props.theme.fonts.jura};
    font-weight: 700;
    margin-top: 24px;
    cursor: pointer;
    align-self: center;
    &:hover {
      box-shadow: 1px 8px 13px rgba(0, 0, 0, 0.15);
    }
`

export const Link = styled.a<LinkProps>`
    font-family: ${props => props.theme.fonts.poppins};
    font-size: 15px;
    font-weight: 700;
    color: #2282DA;
    text-decoration: none;
    cursor: pointer;
    margin-top: 10px;
    display: ${props => props.esqueceuSenha ? 'flex' : ''};
    &:hover {
        text-decoration: underline;
    }

    ${props => props.esqueceuSenha && css`
        align-self: flex-end;
        margin: 10px 0 0 0;
        font-size: 14px;
    `}


`


