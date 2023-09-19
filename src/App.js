import "./App.css"
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"
import Sidebar from "./component/Sidebar";
import { MenuButton } from "./utils/Button"

function App() {
    return (
        <div className="App">
            <input type="checkbox" id="menuicon" />
            <Header 
                left = {<MenuButton />}
                center = {"모두의 대피소"} 
                rigth = {"위치 정보"}
            />

            <div className="Container">
                <Body />
                <Sidebar />
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default App;