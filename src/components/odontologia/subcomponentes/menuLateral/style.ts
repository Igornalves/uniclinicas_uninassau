import styled from "styled-components";

export const DivConteinerMenuLateral = styled.div`
    background-color: ${props => props.theme.cores.Yellow};
    border-right: 2px solid;
    height: 100%;
    width: 20vw;
    min-width: 220px;
    max-width: 300px;
`;


export const DivButaoPagina = styled.div`
    width: 100%;
    height: clamp(40px, 6vh, 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4vh;
    margin-left: 5px;
`;


export const IconButton = styled.img`
    width: clamp(20px, 4vw, 40px);
    height: auto;
    margin-right: 0.7vw;
`;


export const Butao = styled.button<{ active?: boolean }>`
    width: 78%;
    height: clamp(55px, 6vh, 60px);
    border-radius: 1.2vw;
    border: 0px;
    display: flex;
    align-items: center;

    background-color: ${({ active, theme }) =>
    active ? theme.cores.Lightyellow : "transparent"};

    cursor: pointer;
    transition: 0.2s;
`;


export const Textobutao = styled.span<{ active?: boolean }>`
    font-size: clamp(14px, 1.8vw, 25px);
    margin-left: 1vw;
    font-family: ${props => props.theme.fonts.inter};

    color: ${({ active, theme }) =>
    active ? theme.cores.Black : theme.cores.OceanNavy};
    font-weight: 400;
`;