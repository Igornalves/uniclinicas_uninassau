import styled from "styled-components";

export const DivConteinerMenuLateral = styled.div`
    background-color: ${props => props.theme.cores.Yellow};
    border-right: 2px solid;
    height: 100%;
`

export const DivButaoPagina = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const IconButton = styled.img`
    width: 37.61px;
    height: 37.61px;
    margin-right: 9px;
`

export const Butao = styled.button<{ active?: boolean }>`
    width: 246px;
    height: 56px;
    border-radius: 20px;
    border: 0px;
    display: flex;
    align-items: center;

    background-color: ${({ active, theme }) =>
        active ? theme.cores.Lightyellow : "transparent"};

    cursor: pointer;
    transition: 0.2s;
`

export const Textobutao = styled.text<{ active?: boolean }>`
    font-size: 30px;
    margin-left: 15px;
    font-family: ${props => props.theme.fonts.inter};

    color: ${({ active, theme }) =>
        active ? theme.cores.Black : theme.cores.OceanNavy};
        
    font-weight: 400;
    transition: 0.2s;
`
