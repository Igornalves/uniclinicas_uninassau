import styled from "styled-components";

export const DivConteinerPrincipal = styled.div`
    display: grid;
    grid-template-columns: clamp(180px, 20vw, 300px) auto;
    grid-template-rows: clamp(60px, 12vh, 120px) auto;
    width: 100vw;
    height: 100vh;
    /* overflow: hidden; */
    background-color: ${props => props.theme.cores.Background};
`;

export const ConteudoRolavel = styled.div`
    grid-column: 2; /* coluna da direita */
    grid-row: 2;    /* segunda linha */
    height: calc(100vh - clamp(60px, 12vh, 120px));
    overflow-y: auto;
    padding-right: 25px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ButaoAtendimento = styled.button`
    width: 215px;
    height: 56px;
    background-color: ${props => props.theme.cores.White};
    border: 0px;
    font-family: ${props => props.theme.fonts.inter};
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: 500;
    margin-left: 26px;
    margin-top: 30px;

    &:hover {
        color: white;
        background-color: ${props => props.theme.cores.MediumGray};
    }
`

export const DivConteinerGraficos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 39px;
    margin-right: 19px;
    margin-top: 58px;
    margin-bottom: 60px;
`

export const DivButaoIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: red; */
    width: 740px;
    height: auto;
    margin-left: 450px;
    /* justify-content: space-between; */
`

export const ImagemIconAtendimento = styled.img`
    width: 40px;
    height: auto;
    margin-right: 10px;
`
