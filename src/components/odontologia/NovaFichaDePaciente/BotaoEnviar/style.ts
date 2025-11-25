import styled from 'styled-components';


export const DivBotao = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;


button {
background-color: ${(props) => props.theme.cores.Backbuttom};
color: ${(props) => props.theme.cores.White};
padding: 14px 28px;
border-radius: 10px;
border: none;
font-size: 16px;
font-weight: 600;
font-family: ${(props) => props.theme.fonts.poppins};
cursor: pointer;
transition: 0.15s;


&:hover {
background-color: ${(props) => props.theme.cores.OceanNavy};
}


&:active {
transform: scale(0.98);
}
}
`;