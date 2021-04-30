export default function PostTopo (props){
    return(
        <div class="topo">
            <div class="usuario">
              <img src={props.imgUsusario} />
              {props.nomeUsuario}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

