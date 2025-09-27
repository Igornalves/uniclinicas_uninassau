import styled, { css } from "styled-components";

interface TextLineProps extends React.HTMLAttributes<HTMLParagraphElement> {
    textoAlternativo?: boolean;
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
    background-color: ${props => props.theme.yellow};
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
`

export const DivIcones = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const Input = styled.input`
    width: 358px;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    padding-left: 10px;
    box-shadow: 1px 4px 3px rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    &:hover {
      box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.15);
    }
`

export const LabelInput = styled.label`
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: 700;
    margin-top: 18px;
    padding: 2px 0 0 7px;
    color: black;
    align-self: flex-start;
`

export const TextLine = styled.p<TextLineProps>`
    font-family: 'Times New Roman', Times, serif;
    font-size: ${props => props.textoAlternativo ? '15px' : '40px'};
    font-weight: 700;
    text-align: center;

    ${props => props.textoAlternativo && css`
    color: #333;
    line-height: 1.1;
    margin: 30px 0 10px 0;
    `}
`

export const Button = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: blue;
    color: white;
    font-size: 15px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 700;
    margin-top: 24px;
    cursor: pointer;
    align-self: center;
    &:hover {
      box-shadow: 1px 8px 13px rgba(0, 0, 0, 0.15);
    }
`

export const LinkCadastro = styled.a`
    font-family: 'Times New Roman', Times, serif;
    font-size: 15px;
    font-weight: 700;
    color: blue;
    text-decoration: none;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        text-decoration: underline;
    }
`


