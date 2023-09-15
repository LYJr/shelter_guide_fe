import "./App.css"
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"
import Sidebar from "./component/Sidebar";

function App() {
    return (
        <div className="App">
            <input type="checkbox" id="menuicon" />
                <Header 
                    center={"모두의 대피소"} 
                />

                <div className="container">
                  <Body />
                  <Sidebar />
                </div>
                <Footer />
        </div>   
    );
}
  
export default App;