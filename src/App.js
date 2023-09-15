import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';
import Sidebar from './component/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
        <Header 
          title={"모두의 대피소"}     
          rigth={"현재 위치"}  
        />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
