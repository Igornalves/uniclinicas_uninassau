import styled from "styled-components";

export const DivPrincipal = styled.div`
    width: 1150px;
    height: 309px;
    margin-left: 40px;
    margin-top: 23px;
    background-color: ${props => props.theme.cores.White};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Divsecuncaria = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
`

export const DivDeInformacoes = styled.div`
    width: 250px;
    height: 197px;
    background-color: ${props => props.theme.cores.Backbuttom};
    border-radius: 10px;
`

export const TextoTitulo = styled.text`
    font-size: 30px;
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 900;
    margin-left: 25px;
    margin-bottom: 25px;
`
