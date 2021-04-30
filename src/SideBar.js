import SideBarUsuario from "./SideBarUsuario";
import SideBarSugestao from "./SideBarSugestao";

export default function SideBar (){
    return (
        <div class="sidebar">
          
            <SideBarUsuario />

            <div class="sugestoes">

                <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
                </div>

                <SideBarSugestao nome ="bad.vibes.memes" razao="Segue você" imagem="assets/img/bad.vibes.memes.svg"/>
                <SideBarSugestao nome ="chibirdart" razao="Segue você" imagem="assets/img/chibirdart.svg"/>
                <SideBarSugestao nome ="razoesparaacreditar" razao="Novo no Instagram<" imagem="assets/img/razoesparaacreditar.svg"/>
                <SideBarSugestao nome ="adorable_animals" razao="Segue você" imagem="assets/img/adorable_animals.svg"/>
                <SideBarSugestao nome ="smallcutecats" razao="Segue você" imagem="assets/img/smallcutecats.svg"/>

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}