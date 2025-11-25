import styled from 'styled-components';


export const DivTituloDaPagina = styled.div`
width: 100%;
margin-bottom: 8px;


h1 {
font-size: 28px;
font-weight: 700;
font-family: ${(props) => props.theme.fonts.inter};
color: ${(props) => props.theme.cores.Black};
margin: 0;
text-decoration: underline;
}


@media (max-width: 650px) {
h1 {
font-size: 22px;
}
}
`;