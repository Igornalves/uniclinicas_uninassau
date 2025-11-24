import styled from "styled-components";

export const Container = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    gap: 18px;
`;

export const ButaoEditar = styled.button<{ editando: boolean }>`
    margin-top: 10px;
    background: ${props => props.editando 
        ? props.theme.cores.Greenflorence
        : props.theme.cores.OceanNavy};
    color: #fff;
    border-radius: 12px;
    padding: 10px 25px;
    border: none;
    cursor: pointer;
    width: 160px;
    transition: 0.3s ease;
`

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 15px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: ${props => props.theme.fonts.inter};
    font-weight: lighter;

    &:after {
        content: "ⓘ";
        font-size: 15px;
        opacity: 0.7;
    }
`;

export const Input = styled.input`
    height: 38px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;

    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;

    &:disabled {
        background: #f1f1f1;
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
