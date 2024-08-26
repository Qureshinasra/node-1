import Logo from "./assets/logo.jfif"
import Header from "./componet/header.js";
import './App.css';

function App() {
  return (
    <>
      <div className="App">
      <Header/>
      <img src={Logo}></img>
    </div >
    </>

  );
}

export default App;
