import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 170px;
    margin-left: 180px;
`;

export const BtnSalvar = styled.button<{ editando: boolean }>`
    background: ${props => props.editando 
        ? props.theme.cores.Greenflorence 
        : props.theme.cores.OceanNavy};
    color: white;
    border-radius: 12px;
    padding: 12px 28px;
    border: none;
    cursor: pointer;
    transition: .3s;

    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
`;

export const BtnCancelar = styled.button`
    background: #fff;
    border: 2px solid #000;
    border-radius: 12px;
    padding: 12px 28px;
    cursor: pointer;

    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

export const BtnDeletar = styled.button`
    background: #d9534f;
    color: #fff;
    border: none;
    padding: 12px 28px;
    border-radius: 12px;
    margin-left: 230px;
    cursor: pointer;

    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
`;
