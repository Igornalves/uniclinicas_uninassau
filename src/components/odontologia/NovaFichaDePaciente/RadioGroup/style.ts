import styled from 'styled-components';


export const DivRadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;


    span {
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.theme.cores.Black};
    font-family: ${(props) => props.theme.fonts.jura};
    }


    .grupo-opcoes {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;


    label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-family: ${(props) => props.theme.fonts.jura};
    color: ${(props) => props.theme.cores.Black};


    input {
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.cores.BrightBlue};
    }
    }
    }
`;