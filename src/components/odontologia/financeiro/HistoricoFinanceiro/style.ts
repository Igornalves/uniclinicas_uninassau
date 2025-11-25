import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  background: ${props => props.theme.cores.White};
  border-radius: 12px;
  margin-left: 25px;
  margin-right: 25px;
  /* margin-top: 25px; */
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-family: ${props => props.theme.fonts.inter};
  margin-bottom: 15px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.cores.Backbuttom};

  small {
    margin-left: auto;
    opacity: 0.7;
  }
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  background: ${props => props.theme.cores.OceanNavy};
  border-radius: 50%;
`;
