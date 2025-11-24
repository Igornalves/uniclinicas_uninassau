import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: #f4f4f4;
    border-radius: 16px;
    padding: 20px;
    align-items: center;
    gap: 25px;
    border: 1px solid #d3d3d3;
`;

export const Foto = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

export const InfoEsquerda = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
`;

export const Nome = styled.h3`
    font-size: 20px;
    margin-bottom: 4px;
`;

export const Linha = styled.p`
    font-size: 13px;
    margin: 1px 0;
`;

export const InfoDireita = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 350px;
`;

export const TagStatus = styled.span`
    background: #9b0000;
    color: white;
    padding: 3px 10px;
    border-radius: 8px;
    font-size: 12px;
    width: fit-content;
`;

export const TagCarac = styled.span`
    background: #46c746;
    color: white;
    padding: 2px 10px;
    border-radius: 6px;
    font-size: 12px;
    width: fit-content;
`;

export const Botao = styled.button`
    margin-left: auto;
    background: #1c2f57;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 14px;
`;
