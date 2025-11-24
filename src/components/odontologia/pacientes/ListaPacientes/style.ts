import styled from "styled-components";

export const ContainerPage = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid;
    padding: 40px 20px;
    border-radius: 20px 20px 0px 0px ;
    background-color: ${props => props.theme.cores.White};
`;

export const Lista = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const Card = styled.div`
    width: 100%;
    background: ${props => props.theme.cores.Subgrey};
    padding: 25px;
    border-radius: 18px;
    display: grid;
    grid-template-columns: 120px 200px 200px auto 160px;
    align-items: center;
    gap: 20px;

    box-shadow: 0 3px 6px rgba(0,0,0,0.15);
`;

export const TextTituloDados = styled.text`
    font-size: 13px;
    margin: 0px;
    font-family: ${props => props.theme.fonts.inter};
`

export const FotoAnimal = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 80px;
    object-fit: cover;
    border: 2px solid;
`;

export const InfoAnimal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

export const TituloAnimal = styled.h3`
    margin-bottom: 4px;
    font-size: 20px;
`;

export const LinhaInfo = styled.p`
    font-size: 14px;
    color: #333;
`;

export const StatusArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Etiqueta = styled.span<{ tipo: string }>`
    padding: 3px 10px;
    border-radius: 8px;
    font-size: 13px;
    color: white;
    width: fit-content;

    background: ${props => props.tipo === "vermelho" ? "#9f1d1d" : "#1f8b2e"};
`;

export const DonoArea = styled.div`
    font-size: 14px;
    /* background-color: red; */
    margin-right: 35px;
    p:first-child {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const BotaoVisualizar = styled.button`
    background: #193A6A;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
`;
