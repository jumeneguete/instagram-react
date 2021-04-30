import ReactDOM from "react-dom";

import Menu from "./Topo";
import Principal from "./Principal";
import MobileRodape from "./MobileRodape";

export default function App() {
    return (
        <>
            <Menu />
            <Principal />
            <MobileRodape />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
