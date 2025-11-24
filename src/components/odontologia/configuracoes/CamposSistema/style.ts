import styled from "styled-components";

export const Container = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    gap: 18px;
`;

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 15px;
    margin-bottom: 6px;
    font-family: ${props => props.theme.fonts.inter};
    font-weight: lighter;
`;

export const Select = styled.select`
    height: 38px;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid #ccc;
`;

export const InputSenha = styled.input`
    height: 38px;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid #ccc;
`;

export const ToggleContainer = styled.div`
    display: flex;
    flex-direction: column;

    input {
        width: 26px;
        height: 32px;
    }
`;
