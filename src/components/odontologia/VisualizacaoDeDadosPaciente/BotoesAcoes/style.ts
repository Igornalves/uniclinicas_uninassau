import styled from "styled-components";

export const Caixa = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;

export const BotaoBranco = styled.button`
    padding: 12px 22px;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.cores.DarkBlue};
    background-color: ${(props) => props.theme.cores.DarkBlue};
    color:  ${(props) => props.theme.cores.White};
    cursor: pointer;
    font-weight: 600;
`;

export const BotaoAzul = styled.button`
    padding: 12px 22px;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme.cores.DarkBlue};
    color: white;
    cursor: pointer;
    font-weight: 600;
`;
