import styled from "styled-components";

export const Botao = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background-color: ${(props) => props.theme.cores.White};
  border: 2px solid ${(props) => props.theme.cores.Black};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }
`;
