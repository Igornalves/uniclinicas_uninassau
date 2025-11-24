import styled from "styled-components";

export const Card = styled.div`
  width: 360px;
  background: white;
  padding: 24px;
  border-radius: 12px;
`;

export const Title = styled.h2`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 12px;
  font-family: ${props => props.theme.fonts.inter};
`;

export const LegendContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 10px;

  .legend {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 19px;
    font-family: ${props => props.theme.fonts.inter};
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;
