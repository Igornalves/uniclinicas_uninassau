import { Campo, Container, InputSenha, Label, Select, ToggleContainer } from "./style";

interface CamposSistemaProps {
    editando: boolean;
}

export default function CamposSistema({ editando }: CamposSistemaProps) {
    return (
        <Container>
            <Campo>
                <Label htmlFor="idioma">Linguagem</Label>
                <Select id="idioma" name="idioma" disabled={!editando}>
                    <option>Português</option>
                    <option>Inglês</option>
                    <option>Espanhol</option>
                </Select>
            </Campo>

            <Campo>
                <Label htmlFor="pais">País</Label>
                <Select id="pais" name="pais" disabled={!editando}>
                    <option>Brasil</option>
                    <option>Argentina</option>
                    <option>Portugal</option>
                </Select>
            </Campo>

            <Campo>
                <Label htmlFor="senha">Segurança</Label>
                <InputSenha 
                    id="senha"
                    type="password"
                    defaultValue="**********"
                    disabled={!editando}
                />
            </Campo>

            <ToggleContainer>
                <Label htmlFor="doisFatores">Autenticação em dois Fatores</Label>
                <input 
                    id="doisFatores"
                    type="checkbox"
                    disabled={!editando}
                />
            </ToggleContainer>
        </Container>
    );
}
