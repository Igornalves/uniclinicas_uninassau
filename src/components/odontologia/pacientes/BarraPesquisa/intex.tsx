import { FiSearch } from "react-icons/fi";
import { 
    Container, 
    Title, 
    SearchBox, 
    Input, 
    ButtonGroup, 
    Button 
} from "./style";
import { useNavigate } from "react-router-dom";

export default function BarraPesquisa() {

    const navigate = useNavigate();

    function irParaNovaFicha() {
        navigate("/odontologia/nova-ficha");
    }

    function irParaHistorico() {
        navigate("/odontologia/historico-paciente");
    }

    return (
        <Container>
            <Title>Lista de Pacientes</Title>

            <SearchBox>
                <Input placeholder="Pesquisar" />
                <FiSearch size={18} />
            </SearchBox>

            <ButtonGroup>
                <Button onClick={irParaNovaFicha}>+ Nova Ficha</Button>
                <Button onClick={irParaHistorico}>Histórico</Button>
            </ButtonGroup>
        </Container>
    );
}
