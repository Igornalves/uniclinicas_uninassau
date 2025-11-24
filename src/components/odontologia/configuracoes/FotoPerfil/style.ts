import styled from "styled-components";

export const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 4px solid ${props => props.theme.cores.Black};
    background: transparent;
    background-size: cover;
    background-position: center;
`;

export const BtnRow = styled.div`
    display: flex;
    gap: 12px;
    margin: 10px 0;
`;

export const BotaoUpdate = styled.button`
    background: #f0f0f0;
    border: 1px solid #777;
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;

    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
`;

export const BotaoRemove = styled.button`
    background: transparent;
    border: none;
    color: red;
    cursor: pointer;
    font-size: 15px;

    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;

    &:before {
        content: "🗑 ";
        font-size: 18px;
    }
`;

export const BotaoSalvar = styled.button`
    margin-top: 10px;
    background: ${props => props.theme.cores.OceanNavy};
    color: white;
    padding: 10px 25px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
`;

export const TextoInfo = styled.p`
    margin-top: 10px;
    font-size: 12px;
    color: #555;
    font-family: ${props => props.theme.fonts.inter};
    font-weight: 500;
    font-size: 16px;
    margin-top: 19px;
`;
