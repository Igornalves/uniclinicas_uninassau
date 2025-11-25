import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.cores.White};
  border-radius: 10px;
  overflow: hidden;
`;

export const Tr = styled.tr`
  border-bottom: 2px solid ${(props) => props.theme.cores.Black};
`;

export const Th = styled.th`
  padding: 15px;
  background-color: ${(props) => props.theme.cores.Darkgrey};
  border-bottom: 2px solid ${(props) => props.theme.cores.Black};
  text-align: left;
  font-size: 15px;
`;

export const Td = styled.td`
  padding: 12px;
  font-size: 14px;

  a {
    color: ${(props) => props.theme.cores.DarkBlue};
    text-decoration: none;
  }
`;
