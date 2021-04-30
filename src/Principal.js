import SideBar from "./SideBar";
import Stories from "./Stories";
import Feed from "./Feed";

export default function Principal (){
    return (
        <div class="corpo">
          <div class="esquerda">

            <Stories />
            <Feed />

          </div>

        <SideBar />
      </div> 
    );
}