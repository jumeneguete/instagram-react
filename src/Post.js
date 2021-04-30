import PostTopo from "./PostTopo";
import PostImagem from "./PostImagem";
import PostAcoes from "./PostAcoes";
import PostCurtidas from "./PostCurtidas";


export default function Post (){
    const post = [
        {
            imgUsusario: "assets/img/meowed.svg", 
            nomeUsuario: "meowed", 
            imgPost: "assets/img/gato-telefone.svg",
            imgQuemCurtiu: "assets/img/respondeai.svg",
            nomeQuemCurtiu: "respondeai"
        },
        {
            imgUsusario: "assets/img/barked.svg" , 
            nomeUsuario: "barked", 
            imgPost: "assets/img/dog.svg",
            imgQuemCurtiu: "assets/img/adorable_animals.svg",
            nomeQuemCurtiu: "adorable_animals"
        }
    ]

    return(
        <>
        {post.map(item => (
            <div class="post">
                <PostTopo imgUsusario= {item.imgUsusario} nomeUsuario= {item.nomeUsuario} />
                <PostImagem imgPost= {item.imgPost} />

            <div class="fundo">
                <PostAcoes />
                <PostCurtidas imgQuemCurtiu= {item.imgQuemCurtiu} nomeQuemCurtiu= {item.nomeQuemCurtiu}/>
            </div>
            </div>

        ))}
        </>
        
    );
}


