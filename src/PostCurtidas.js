export default function PostCurtidas (props){
    return(
        <div class="curtidas">
            <img src={props.imgQuemCurtiu} />
            <div class="texto">
            Curtido por <strong>{props.nomeQuemCurtiu}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
        </div>
    );
}