import styled from "styled-components";

export const Card = styled.div`
  width: 360px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 2px;
  font-family: ${props => props.theme.fonts.inter};
`;

export const Circle = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 6px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  margin: 0 auto;
`;

export const Label = styled.p`
  margin-top: 40px;
  font-size: 24px;
`;
