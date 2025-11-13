import styled from "styled-components";

export const DivConteiner = styled.div`
    display: flex;
    flex-direction: column;   
    /* margin-top: 36px; */
`

export const Texto = styled.text`
    font-family: ${props => props.theme.fonts.poppins};
    font-weight: 500;
    font-size: 16px;
    color: ${props => props.theme.cores.DarkSlateBlue};
    margin-bottom: 10px;
    /* margin-top: 36px; */
    padding-left: 5px;
`

export const InputText = styled.input`
    width: 617px;
    height: 54px;
    border: 2px solid;
    border-radius: 8px;
    padding-left: 25px;
`
