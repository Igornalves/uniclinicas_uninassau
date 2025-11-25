import styled from 'styled-components';

export const DivInputPadrao = styled.div`
display: flex;
flex-direction: column;
gap: 8px;


label {
font-size: 15px;
font-weight: 600;
font-family: ${(props) => props.theme.fonts.jura};
color: ${(props) => props.theme.cores.Black};
}


input {
width: 100%;
height: 42px;
padding: 0 12px;
border-radius: 8px;
border: 1px solid ${(props) => props.theme.cores.MediumGray};
background-color: ${(props) => props.theme.cores.White};
color: ${(props) => props.theme.cores.Black};
font-size: 15px;
font-family: ${(props) => props.theme.fonts.jura};
outline: none;
transition: 0.15s;


&:focus {
border-color: ${(props) => props.theme.cores.BrightBlue};
box-shadow: 0 0 0 4px rgba(34, 130, 218, 0.12);
}


&::placeholder {
color: ${(props) => props.theme.cores.MediumGray};
}
}
`;