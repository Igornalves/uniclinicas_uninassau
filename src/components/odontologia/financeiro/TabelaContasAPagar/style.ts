import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  background: ${props => props.theme.cores.White};
  border-radius: 12px;
  margin-top: 25px;
  margin-left: 10px;
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: 23px;
  font-family: ${props => props.theme.fonts.inter};
  margin-bottom: 15px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    border-bottom: 1px solid ${props => props.theme.cores.Backbuttom};
    text-align: left;
  }

  th {
    font-weight: bold;
  }
`;
