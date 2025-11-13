import styled from "styled-components";

export const DivConteinerGeral = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.cores.Yellow};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivConteinerSecundario = styled.div`
    width: 750px;
    height: 600px;
    background-color: ${props => props.theme.cores.IceGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 68px;   
    margin-bottom: 42px;
`

export const Txt = styled.text`
    font-family: ${props => props.theme.fonts.poppins};
    font-weight: 500;
    font-size: 32px;
    color: ${props => props.theme.cores.DarkBlue};
    margin-bottom: 16px;
`

export const Txt2 = styled.text`
    font-family: ${props => props.theme.fonts.poppins};
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.cores.MediumGray};
    margin-bottom: 42px;
`

export const Txt3 = styled.text`
    margin-top: 36px;
`
