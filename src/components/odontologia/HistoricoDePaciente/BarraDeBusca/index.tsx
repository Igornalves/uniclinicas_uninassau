import { InputBusca, ContainerBusca, Icone } from "./style";
import { IoSearch } from "react-icons/io5";

export default function BarraDeBusca() {
  return (
    <ContainerBusca>
      <Icone>
        <IoSearch size={20} />
      </Icone>
      <InputBusca placeholder="Buscar por Nome" />
    </ContainerBusca>
  );
}
