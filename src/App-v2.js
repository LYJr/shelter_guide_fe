import Header from "./component-v2/Header"
import Body from "./component-v2/Body"
import Footer from "./component-v2/Footer"
import { Button } from "./utils/Button";
import Sidebar from "./component-v2/Sidebar";

function App_v2() {
    return (
        <div className="App">
            <input type="checkbox" id="menuicon" />
                <Header 
                    center={"모두의 대피소"} 
                />

                <div className="container">
                    <div className="contents">
                        <span class="area_desc">바디 영역</span>
                    </div>
                <Sidebar />
                </div>
                <Footer />
        </div>   
    );
}
  
export default App_v2;