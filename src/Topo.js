import DesktopLogo from "./DesktopLogo";
import MobileLogoEIcone from "./MobileLogoEIcone";
import DesktopPesquisa from "./DesktopPesquisa";
import DesktopIconesNavBar from "./DesktopIconesNavBar";
import MobileIconeNavBar from "./MobileIconeNavBar";

export default function Menu() {
  return (
    <div class="navbar">
      <div class="container">
        <DesktopLogo />
        <MobileLogoEIcone />
        <DesktopPesquisa />
        <DesktopIconesNavBar />
        <MobileIconeNavBar />  
      </div>
    </div>
  );
}
