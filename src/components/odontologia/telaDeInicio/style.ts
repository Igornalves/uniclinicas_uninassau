import styled from "styled-components";

export const DivConteinerPrincipal = styled.div`
    display: grid;
    grid-template-columns: 322px auto; /* menu lateral + conteúdo */
    grid-template-rows: 115px auto; /* menu cima + conteúdo */
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: ${props => props.theme.cores.Background};
`
