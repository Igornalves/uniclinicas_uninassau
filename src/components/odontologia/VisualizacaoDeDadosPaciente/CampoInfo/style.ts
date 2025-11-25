import styled from "styled-components";

export const Caixa = styled.div<{ grande?: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.span`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 3px;
    
`;

export const Valor = styled.div<{ grande?: boolean }>`
    width: 100%;
    min-height: ${(props) => (props.grande ? "85px" : "40px")};
    padding: 10px;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.cores.DarkBlue};
    background-color: ${(props) => props.theme.cores.Background};
    white-space: pre-line;
`;
