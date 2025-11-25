import styled from "styled-components";

export const Botao = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 6px;
    border: 2px solid ${(props) => props.theme.cores.Black};
    background-color: ${(props) => props.theme.cores.Backbuttom};
    color: ${props => props.theme.cores.White};
    cursor: pointer;
    font-weight: 600;

    margin-left: 595px;

    &:hover {
        filter: brightness(0.95);
    }
`;
