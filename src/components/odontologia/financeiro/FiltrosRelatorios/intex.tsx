import { FaFilter } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { ContainerFiltros, LinhaFiltros, Select, BotaoFiltro, BotaoExportar } from "./style";

export default function FiltrosRelatorios() {
    return (
        <ContainerFiltros>
            <LinhaFiltros>
                <div>
                    <label>Período</label>
                    <Select>
                        <option>Últimos 3 meses</option>
                        <option>Último mês</option>
                        <option>Últimos 6 meses</option>
                        <option>Último ano</option>
                    </Select>
                </div>

                <div>
                    <label>Categorias</label>
                    <Select>
                        <option>Todos</option>
                        <option>Consultas</option>
                        <option>Exames</option>
                        <option>Cirurgias</option>
                    </Select>
                </div>

                <div>
                    <label>Profissionais</label>
                    <Select>
                        <option>Todos</option>
                        <option>Dr. João</option>
                        <option>Dra. Maria</option>
                    </Select>
                </div>

                <BotaoFiltro> 
                    <FaFilter className="iconeFiltro"/>
                    Filtrar
                </BotaoFiltro>

                <BotaoExportar>
                    <FaFileAlt className="iconeArquivo" size={18}/>
                    Exportar
                </BotaoExportar>

            </LinhaFiltros>
        </ContainerFiltros>
    );
}
