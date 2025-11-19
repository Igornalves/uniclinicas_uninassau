import styled from "styled-components";

export const DivConteinerPrincipal = styled.div`
    grid-column: 1 / 3;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px; /* respiro lateral */
    background-color: ${props => props.theme.cores.Yellow};
    border-bottom: 2px solid;
    gap: 25px; /* espaçamento entre itens */
`;

export const TextoTituloDoSistemaClinica = styled.text`
    font-size: 30px;
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
    flex-grow: 1; /* empurra elementos da direita */
`

export const ImagemIcon = styled.img`
    width: 92px;
    height: 90px;
`

export const LinkButton = styled.button`
    border: 0px;
    background-color: transparent;
`

export const ImagemPerfil = styled.img`
    width: 80px;
    height: 80px;
`

export const ImagemNotificacao = styled.img`
    width: 50px;
    height: 50px;
`

export const TextLink = styled.text`
    font-size: 30px;
    text-decoration: underline;
    font-weight: 500;
    font-family: ${props => props.theme.fonts.inter};
`

export const BarraVertical = styled.div`
    width: 2px;
    height: 17vh;
    background-color: #000;
`
