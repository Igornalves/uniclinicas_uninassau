import styled from "styled-components";

export const Foto = styled.img`
    width: 210px;
    height: 210px;
    border-radius: 50%;
    border: 4px solid ${(props) => props.theme.cores.DarkBlue};
    object-fit: cover;
`;
