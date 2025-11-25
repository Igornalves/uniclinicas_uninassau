import styled from "styled-components";

export const ContainerBusca = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.cores.Darkgrey};
  border: 2px solid ${(props) => props.theme.cores.Black};
  border-radius: 8px;
  padding: 6px 10px;
  width: 300px;
`;

export const Icone = styled.div`
  margin-right: 8px;
`;

export const InputBusca = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  background-color: ${(props) => props.theme.cores.Darkgrey};

  &::placeholder {
    color: ${(props) => props.theme.cores.Black};
  }
`;
