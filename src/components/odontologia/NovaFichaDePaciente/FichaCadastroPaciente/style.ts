import styled from "styled-components";

export const ContainerFicha = styled.div`
  width: 100%;
  max-width: 1200px; /* 🔥 largura máxima real */
  margin: 50px auto; /* 🔥 centraliza automaticamente */
  
  margin-top: 0px;
  padding: 35px;
  min-height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 35px;

  border-radius: 20px;
  border: 2px solid;
  background-color: ${(props) => props.theme.cores.White};

  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 25px;
  }
`;


/* -------------------------------------------------------
   GRID PADRÃO DAS LINHAS
-------------------------------------------------------- */
export const LinhaInputs = styled.div<{ colunas?: number }>`
  width: 100%;
  display: grid;
  gap: 22px;

  grid-template-columns: ${({ colunas }) =>
    colunas ? `repeat(${colunas}, 1fr)` : "1fr"};

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;