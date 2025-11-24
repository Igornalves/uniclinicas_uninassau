import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 45px;
    display: flex;
    justify-content: space-between;
`;

export const Card = styled.div`
    width: 48%;
    height: 130px;
    background-color: #fff;
    border-radius: 14px;
    padding: 18px;
    box-shadow: 0 0 6px rgba(0,0,0,0.1);
`;

export const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`;

export const Value = styled.p<{ verde?: boolean; vermelho?: boolean }>`
    margin-top: 20px;
    font-size: 30px;
    font-weight: 700;
    color: ${({ verde, vermelho }) =>
        (verde && "#16a34a") || (vermelho && "#dc2626")};
`;
