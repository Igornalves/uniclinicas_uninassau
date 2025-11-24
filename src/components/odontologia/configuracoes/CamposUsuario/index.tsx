import { Container, Label, Input, Campo } from "./style";

interface CamposUsuarioProps {
    editando: boolean;
}

export default function CamposUsuario({ editando }: CamposUsuarioProps) {
    return (
        <Container>
            <Campo>
                <Label>User Name</Label>
                <Input 
                    defaultValue="Lucas Oliveira"
                    disabled={!editando}
                />
            </Campo>

            <Campo>
                <Label>Email</Label>
                <Input 
                    defaultValue="emaildousar@gmail.com"
                    disabled={!editando}
                />
            </Campo>

            <Campo>
                <Label>CPF</Label>
                <Input 
                    defaultValue="045.***.***-**"
                    disabled={!editando}
                />
            </Campo>

            <Campo>
                <Label>Telefone</Label>
                <Input 
                    defaultValue="(86) 99343-2343"
                    disabled={!editando}
                />
            </Campo>
        </Container>
    );
}
