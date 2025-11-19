import { BarraVertical, DivConteinerPrincipal, ImagemIcon, ImagemNotificacao, ImagemPerfil, LinkButton, TextLink, TextoTituloDoSistemaClinica } from "./style";
import img1 from "../../../../assets/images/iconMedicinaVeterinaria.png"
import img2 from "../../../../assets/Icon Perfil.png"
import img3 from "../../../../assets/image 24.png"
import img4 from "../../../../assets/images/438855310_1616687672427610_5315768813804236953_n-removebg-preview 2.png"

export default function MenuHorizontalCima() {
    return(
        <DivConteinerPrincipal>
            <ImagemIcon src={img1} /> 
            <BarraVertical></BarraVertical>

            <TextoTituloDoSistemaClinica>
                Clinica: Medicina Veterinaria
            </TextoTituloDoSistemaClinica>

            <LinkButton>
                <TextLink>Entrar</TextLink>
            </LinkButton>

            <ImagemPerfil src={img2}/>
            <ImagemNotificacao src={img3}/> 
            
            <BarraVertical></BarraVertical>
            <ImagemIcon src={img4} /> 
        </DivConteinerPrincipal>
    );
}