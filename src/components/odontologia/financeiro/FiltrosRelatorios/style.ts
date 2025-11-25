import styled from "styled-components";

export const ContainerFiltros = styled.div`
    width: 97%;
    display: flex;
    justify-content: flex-start;
    margin-top: 25px;
    margin-left: 0px;
    margin-bottom: 25px;
`;

export const LinhaFiltros = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    gap: 20px;
    align-items: flex-end;

    label {
        font-size: 14px;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.inter};
    }
`;

export const Select = styled.select`
    width: 160px;
    height: 38px;
    margin-left: 10px;
    border-radius: 8px;
    border: 2px solid #ccc;
    font-size: 15px;
    padding-left: 9px;
    outline: none;
`;

export const BotaoFiltro = styled.button`
    height: 38px;
    padding: 0 20px;
    border: none;
    background-color: #2a2a2a;
    color: white;
    border-radius: 8px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    .iconeFiltro {
        margin-right: 10px;
    }
`;

export const BotaoExportar = styled.button`
    height: 38px;
    padding: 0 20px;
    background-color: #134b7f;
    color: white;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-left: 130px;

    .iconeArquivo {
        margin-right: 10px;
    }
`;

