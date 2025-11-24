import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px 20px;

    /* background: #dcdce3;  */
    border-radius: 8px;
`;

export const Title = styled.h2`
    font-size: 25px;
    font-family: ${props => props.theme.fonts.jura};
    font-weight: 700;
    color: #1b1b1b;
    margin-right: 10px;
    text-decoration: underline;
`;

export const SearchBox = styled.div`
    display: flex;
    align-items: center;

    background: ${props => props.theme.cores.White};
    width: 570px;
    height: 40px;

    border-radius: 8px;
    padding: 0 12px;

    border: 2px solid;

    svg {
        margin-left: 8px;
        color: #0f0f0f;
    }
`;

export const Input = styled.input`
    flex: 1;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    font-size: 15px;
    color: #373737;

    /* border: 2px solid */
`;

export const ButtonGroup = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Button = styled.button`
    background: #1d3156;
    color: white;
    font-size: 14px;
    border: none;

    padding: 10px 20px;
    border-radius: 8px;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.85;
    }
`;
