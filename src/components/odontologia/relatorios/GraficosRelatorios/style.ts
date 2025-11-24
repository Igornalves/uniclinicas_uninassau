import styled from "styled-components";

export const ContainerGraficos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const CardGrafico = styled.div`
    width: 48%;
    background-color: white;
    padding: 20px;
    padding-right: 40px;
    padding-left: 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Titulo = styled.h3`
    font-family: ${({ theme }) => theme.fonts.inter};
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 700;
`;
