import styled from 'styled-components';


export const StyledLinha = styled.div<{ colunas?: number }>`
    width: 100%;
    display: grid;
    gap: 22px;


    grid-template-columns: ${({ colunas }) => (colunas ? `repeat(${colunas}, 1fr)` : 'repeat(1, 1fr)')};


    @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    }


    @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    }
`;