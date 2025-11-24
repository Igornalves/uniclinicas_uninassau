import { FiSearch } from "react-icons/fi";
import { 
    Container, 
    Title, 
    SearchBox, 
    Input, 
    ButtonGroup, 
    Button 
} from "./style";

export default function BarraPesquisa() {
    return (
        <Container>
            <Title>Lista de Pacientes</Title>

            <SearchBox>
                <Input placeholder="Pesquisar" />
                <FiSearch size={18} />
            </SearchBox>

            <ButtonGroup>
                <Button>+ Nova Ficha</Button>
                <Button>Histórico</Button>
            </ButtonGroup>
        </Container>
    );
}
