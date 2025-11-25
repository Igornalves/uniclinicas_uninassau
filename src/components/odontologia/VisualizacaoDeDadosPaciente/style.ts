import styled from "styled-components";

export const DivConteinerPrincipal = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: clamp(60px, 12vh, 120px) auto;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.cores.Background};
`;

export const ConteudoRolavel = styled.div`
    grid-row: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding: 25px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const BotaoVoltar = styled.button`
    align-self: flex-start;
    margin-bottom: 10px;

    background-color: ${(props) => props.theme.cores.Yellow};
    color: ${(props) => props.theme.cores.DarkBlue};
    font-size: 18px;
    font-weight: 700;
    border-radius: 50px;
    border: none;

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 12px 22px;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
        background-color: ${(props) => props.theme.cores.Backbuttom};
        color: ${(props) => props.theme.cores.White};
    }
`;

export const DivSecundaria = styled.div`
    width: 100%;
    max-width: 1250px;
    padding: 40px;
    border: 2px solid;
    
    display: flex;
    flex-direction: column;
    gap: 40px;

    background-color: ${(props) => props.theme.cores.White};
    border-radius: 20px;
`;

export const TituloDaPagina = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 900;
    font-family: ${props => props.theme.fonts.jura};

    border-bottom: 2px solid ${(props) => props.theme.cores.DarkBlue};
    padding-bottom: 10px;
`;

export const LinhaDupla = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const LinhaSimples = styled.div`
    display: flex;
    gap: 20px;
`;
