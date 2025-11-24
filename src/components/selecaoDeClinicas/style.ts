import styled from 'styled-components';

export const DivConteinerPrincipal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.cores.Yellow};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TextoTitulo = styled.text`
    font-family: ${props => props.theme.fonts.inter};
    font-size: 38px;
    font-weight:  700;
    margin-bottom: 70px;
    text-decoration: underline;
`;

export const DivConteinerSecundaria = styled.div`
    
`;

interface ButaoProps {
  ativo: boolean;
}

export const ButaoDeSelecao = styled.button<ButaoProps>`
    background-color: ${props => props.ativo ? props.theme.cores.Greenflorence : props.theme.cores.White};
    width: 373px;
    height: 486px;
    border-radius: 20px;
    border: 5px solid;
    margin-right: 34px;
    
    &:hover {
        background-color: ${props => props.ativo ? props.theme.cores.Greenflorence : props.theme.cores.IceGray};
    }
`

export const Imagem = styled.img`
    width: 300px;
    height: 350px;
    pointer-events: none;
`
