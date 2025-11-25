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

    > * {
        width: 100%;
        max-width: 1200px;
    }
`;

export const BotaoVoltar = styled.button`
    background-color: ${(props) => props.theme.cores.Yellow};
    color: ${(props) => props.theme.cores.Black};
    border: none;
    padding: 12px 18px;
    border-radius: 50px;
    font-size: 18px;
    cursor: pointer;
    width: fit-content;
    font-weight: 600;
    margin-bottom: 0px;
    margin-right: 1370px;

    &:hover {
        filter: brightness(0.9);
    }
`;

export const Titulo = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
    font-size: 38px;
    font-family: ${props => props.theme.fonts.jura};
    color: ${(props) => props.theme.cores.Black};
    text-decoration:underline;
`;

export const LinhaTopo = styled.div`
    display: flex;
    width: 100%;
    gap: 15px;
    align-items: center;
`;

export const DivSecundaria = styled.div`
    width: 100%;
    max-width: 1250px; /* 🔥 largura máxima real */
    /* margin: 50px auto; 🔥 centraliza automaticamente */
    
    margin-top: 0px;
    padding: 35px;
    min-height: fit-content;
    border: 2px solid;

    display: flex;
    flex-direction: column;
    gap: 35px;

    border-radius: 20px;
    /* border: 2px solid; */
    background-color: ${(props) => props.theme.cores.White};

    box-sizing: border-box;
`
