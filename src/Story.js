export default function Story (){

    const itemStory = [
        {linkImg: "assets/img/9gag.svg" , usuario: "9gag"},
        {linkImg: "assets/img/meowed.svg" , usuario: "meowed"},
        {linkImg: "assets/img/barked.svg" , usuario: "barked"},
        {linkImg: "assets/img/nathanwpylestrangeplanet.svg" , usuario: "nathanwpylestrangeplanet"},
        {linkImg: "assets/img/wawawicomics.svg" , usuario: "wawawicomics"},
        {linkImg: "assets/img/respondeai.svg" , usuario: "respondeai"},
        {linkImg: "assets/img/filomoderna.svg" , usuario: "filomoderna"},
        {linkImg: "assets/img/memeriagourmet.svg" , usuario: "memeriagourmet"}
    ];

    return(
        <>
            {itemStory.map(item => (
                <div class="story">
                        <div class="imagem">
                            <img src= {item.linkImg}/>
                        </div>
                        <div class="usuario">
                            {item.usuario}
                        </div>
                </div>
            ))};
        </>
    );
}