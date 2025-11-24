import { Container, BtnSalvar, BtnCancelar, BtnDeletar } from "./style";

interface AcoesGeraisProps {
    editando: boolean;
    toggleEdicao: () => void;
}

export default function AcoesGerais({ editando, toggleEdicao }: AcoesGeraisProps) {
    return (
        <Container>

            <BtnSalvar onClick={toggleEdicao} editando={editando}>
                {editando ? "💾 Salvar alterações" : "✏️ Editar informações"}
            </BtnSalvar>

            <BtnCancelar disabled={!editando}>
                Cancelar
            </BtnCancelar>

            <BtnDeletar>
                Deletar a Conta
            </BtnDeletar>

        </Container>
    );
}
