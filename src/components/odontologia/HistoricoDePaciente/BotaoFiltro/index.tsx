import { Botao } from "./style";
import { IoChevronDown } from "react-icons/io5";

export default function BotaoFiltro() {
  return (
    <Botao>
      Filtro
      <IoChevronDown size={18} />
    </Botao>
  );
}
