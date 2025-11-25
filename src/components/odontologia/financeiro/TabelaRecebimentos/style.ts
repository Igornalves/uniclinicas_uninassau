import styled from "styled-components";

export const ContainerTabela = styled.div`
    width: 96%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin-top: 25px;
    margin-bottom: 32px;
    margin-left: 10px;
`;

export const TituloTabela = styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
    font-family: ${({ theme }) => theme.fonts.inter};
`;

export const Tabela = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        text-align: left;
        padding-bottom: 12px;
        font-weight: 600;
        border-bottom: 2px solid #dcdcdc;
    }

    td {
        padding: 10px 4px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
    }
`;
