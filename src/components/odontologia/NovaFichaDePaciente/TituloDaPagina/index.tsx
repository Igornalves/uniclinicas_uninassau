import { DivTituloDaPagina } from './style';

interface Props {
titulo: string;
}

export default function TituloDaPagina({ titulo }: Props) {
return (
    <DivTituloDaPagina>
        <h1>{titulo}</h1>
    </DivTituloDaPagina>
);
}