import styled from "styled-components";

export const DivConteiner = styled.div`
    width: 562px;
    height: 100vh;
    background-color: ${props => props.theme.gray100};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextLine = styled.text`
    font-family: 'Times New Roman', Times, serif;
    font-size: 50px;
    font-weight: 700;
    font-style: italic;
`
