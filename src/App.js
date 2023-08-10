import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';
import {Button, } from './utils/Button';

function App() {
  return (
    <div className="App">
      <Header 
        left={<Button location={"Header"} text ={"메뉴"} />} 
        title={"모두의 대피소"}     
        rigth={"현재 위치"}  
      />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
