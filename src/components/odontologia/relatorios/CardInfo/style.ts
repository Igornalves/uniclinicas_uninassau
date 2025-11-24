import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin-left: 40px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

export const Card = styled.div`
    width: 32%;
    height: 130px;
    background-color: #fff;
    border-radius: 14px;
    padding: 18px;
    box-shadow: 0 0 6px rgba(0,0,0,0.1);
    position: relative;
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.cores.Black};
`;

export const IconArea = styled.div`
    position: absolute;
    top: 16px;
    right: 18px;
    opacity: 0.7;
`;

export const Value = styled.p<{ verde?: boolean; vermelho?: boolean; azul?: boolean }>`
    margin-top: 20px;
    font-size: 28px;
    font-weight: 700;
    color: ${({ verde, vermelho, azul }) =>
        (verde && "#16a34a") ||
        (vermelho && "#dc2626") ||
        (azul && "#2563eb")};
`;
