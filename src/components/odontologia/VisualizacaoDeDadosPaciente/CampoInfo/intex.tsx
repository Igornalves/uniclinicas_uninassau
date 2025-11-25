import { Caixa, Label, Valor } from "./style";

interface Props {
    label: string;
    valor: string;
    grande?: boolean;
}

export default function CampoInfo({ label, valor, grande }: Props) {
    return (
        <Caixa grande={grande}>
            <Label>{label}</Label>
            <Valor grande={grande}>{valor}</Valor>
        </Caixa>
    );
}
