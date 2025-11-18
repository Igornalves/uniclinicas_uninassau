import styled from "styled-components";

export const DivConteinerPrincipal = styled.div`
    grid-column: 1 / 3; /* ocupa a linha inteira */
    height: 100%;
    background-color: ${props => props.theme.cores.Yellow};
    border-bottom: 2px solid;
`
