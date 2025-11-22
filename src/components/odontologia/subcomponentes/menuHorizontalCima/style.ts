import styled from "styled-components";


export const DivConteinerPrincipal = styled.div`
    grid-column: 1 / 3; /* ocupa as duas colunas */
    grid-row: 1;        /* ocupa a linha superior */
    
    position: sticky;
    top: 0;
    z-index: 10;

    height: clamp(60px, 12vh, 120px);
    display: flex;
    align-items: center;
    padding: 0 2vw;
    background-color: ${props => props.theme.cores.Yellow};
    border-bottom: 2px solid;
    gap: 2vw;
`;


export const TextoTituloDoSistemaClinica = styled.span`
    font-size: clamp(18px, 2.5vw, 25px);
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
    flex-grow: 1;
`;


export const ImagemIcon = styled.img`
    width: clamp(40px, 8vw, 70px);
    height: auto;
`;


export const LinkButton = styled.button`
    border: 0px;
    background-color: transparent;
`;


export const ImagemPerfil = styled.img`
    width: clamp(35px, 7vw, 60px);
    height: auto;
`;


export const ImagemNotificacao = styled.img`
    width: clamp(20px, 4vw, 40px);
    height: auto;
`;


export const TextLink = styled.span`
    font-size: clamp(16px, 2vw, 25px);
    text-decoration: underline;
    font-weight: 500;
    font-family: ${props => props.theme.fonts.inter};

    &:hover{
        color: ${props => props.theme.cores.DarkSlateBlue};
    }
`;


export const BarraVertical = styled.div`
    width: 2px;
    height: 100%; /* acompanha o tamanho da barra */
    background-color: #000;
`;