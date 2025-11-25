import { DivBotao } from './style';


interface Props {
texto: string;
onClick?: () => void;
}


export default function BotaoEnviar({ texto, onClick }: Props) {
return (
<DivBotao>
<button type="button" onClick={onClick}>{texto}</button>
</DivBotao>
);
}