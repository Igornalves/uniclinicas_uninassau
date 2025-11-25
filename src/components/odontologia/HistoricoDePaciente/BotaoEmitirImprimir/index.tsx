import { Botao } from "./style";
import { IoPrintSharp } from "react-icons/io5";

export default function BotaoEmitirImprimir() {
  return (
    <Botao>
      <IoPrintSharp size={19} />
      Emitir / Imprimir
    </Botao>
  );
}
