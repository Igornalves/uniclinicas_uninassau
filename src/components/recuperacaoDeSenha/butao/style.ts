import styled from "styled-components";

export const DivConteiner = styled.div`
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ButaoEnviar = styled.button`
    width: 254px;
    height: 49px;
    border-radius: 11px;
    background-color: ${props => props.theme.cores.DarkNavyBlue};
`

export const TextoButao = styled.text`
    font-family: ${props => props.theme.fonts.poppins};
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.cores.White};
`

export const RetornarButao = styled.button`
    margin-top: 42px;
    display: flex;
    border: none;
`

export const RetornaText = styled.text`
    font-family: ${props => props.theme.fonts.poppins};
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.theme.cores.BrightBlue};
`

export const RetornaImagem = styled.img`
    margin-right: 10px;
    width: 18px;
    height: 18px;
`
