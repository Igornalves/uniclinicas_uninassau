import styled from "styled-components";

export const ContainerGeral = styled.div`
    width: 95%;
    height: 95%;
    background: ${props => props.theme.cores.White};
    border-radius: 12px;
    /* margin: 25px auto; */
    margin-top: 35px;
    margin-left: 35px;
    padding: 25px;
`;

export const Linha = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
`;

