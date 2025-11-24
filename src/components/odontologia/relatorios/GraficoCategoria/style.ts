import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  /* height: 370px; */
  background: ${props => props.theme.cores.White};
  border-radius: 12px;
  /* padding: 15px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-left: 33px; */
`;

export const Title = styled.h3`
  font-size: 22px;
  font-family: ${props => props.theme.fonts.inter};
  margin-bottom: 32px;
  margin-top: 15px;
  margin-right: 230px;
`;
