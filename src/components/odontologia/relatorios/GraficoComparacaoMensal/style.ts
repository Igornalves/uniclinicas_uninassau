import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  /* height: 370px; */
  background: ${props => props.theme.cores.White};
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin-right: 58px ; */
`;

export const Title = styled.h3`
  font-size: 22px;
  font-family: ${props => props.theme.fonts.inter};
  margin-bottom: 35px;
`;
