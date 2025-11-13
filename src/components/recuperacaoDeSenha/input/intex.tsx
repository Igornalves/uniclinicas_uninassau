import { DivConteiner, InputText, Texto } from "./style";

interface types  {
    textos: string
}

export function Input({ textos }:types){
    return(
        <DivConteiner>
            <Texto>
                {textos}
            </Texto>
            <InputText 
                type="text"
                placeholder="••••••••••"
            />
        </DivConteiner>
    );
}