import { useEffect, useState } from "react";
import { Avatar, BotaoRemove, BotaoSalvar, BotaoUpdate, BtnRow, Container, TextoInfo } from "./style";

interface FotoPerfilProps {
    editando: boolean;
}

export default function FotoPerfil({ editando }: FotoPerfilProps) {

    const [imagem, setImagem] = useState<string | null>(null);

    useEffect(() => {
        const imgSalva = localStorage.getItem("foto_perfil");
        if (imgSalva) setImagem(imgSalva);
    }, []);

    const handleSelecionarImagem = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!editando) return;

        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert("A imagem deve ter no máximo 5MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => setImagem(reader.result as string);
        reader.readAsDataURL(file);
    };

    const handleSalvar = () => {
        if (!editando) return;

        if (!imagem) {
            alert("Selecione uma imagem antes de salvar.");
            return;
        }

        localStorage.setItem("foto_perfil", imagem);
        alert("Imagem salva com sucesso!");
    };

    const handleRemover = () => {
        if (!editando) return;

        setImagem(null);
        localStorage.removeItem("foto_perfil");
    };

    return (
        <Container>
            <Avatar
                style={{
                    backgroundImage: imagem ? `url(${imagem})` : "none",
                }}
            />

            <input 
                id="input-file-foto" 
                type="file" 
                accept="image/*" 
                style={{ display: "none" }}
                onChange={handleSelecionarImagem}
                disabled={!editando}
            />

            <BtnRow>
                <BotaoUpdate
                    disabled={!editando}
                    onClick={() => document.getElementById("input-file-foto")?.click()}
                >
                    Update
                </BotaoUpdate>

                <BotaoRemove disabled={!editando} onClick={handleRemover}>
                    Remover
                </BotaoRemove>
            </BtnRow>

            <BotaoSalvar disabled={!editando} onClick={handleSalvar}>
                Salvar Foto
            </BotaoSalvar>

            <TextoInfo>Tamanho máximo de imagem é 5 MB</TextoInfo>
        </Container>
    );
}
