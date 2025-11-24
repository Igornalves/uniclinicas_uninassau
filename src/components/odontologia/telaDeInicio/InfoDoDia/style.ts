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
`;

export const TextoTitulo = styled.h1`
    font-size: 26px;
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 900;
    margin-left: 25px;
    margin-top: 20px;
    margin-bottom: 25px;
`;

export const Divsecuncaria = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
`;

export const DivDeInformacoes = styled.div`
    width: 250px;
    height: 197px;
    background-color: ${props => props.theme.cores.Backbuttom};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Numero = styled.span`
    font-size: 60px;
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 700;
    color: white;
`;

export const TextoDescricao = styled.span`
    margin-top: 10px;
    font-size: 20px;
    color: white;
    font-family: ${props => props.theme.fonts.inter};
    text-align: center;
`;

export const Icone = styled.div`
    margin-top: 25px;
    font-size: 25px;
    color: white;
`;
