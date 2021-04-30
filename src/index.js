import ReactDOM from "react-dom";

import Menu from "./Topo";
import Principal from "./Principal";
import RodapeMobile from "./RodapeMobile";

export default function App() {
    return (
        <>
            <Menu />
            <Principal />
            <RodapeMobile />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
