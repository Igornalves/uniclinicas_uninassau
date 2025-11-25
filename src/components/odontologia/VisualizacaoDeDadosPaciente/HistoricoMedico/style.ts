import styled from "styled-components";

export const BoxHistorico = styled.div`
    border: 2px solid ${(props) => props.theme.cores.DarkBlue};
    padding: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.cores.Background};

    h3 {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: 600;
        border-bottom: 2px solid;
        padding-bottom: 10px;
    }
`;
