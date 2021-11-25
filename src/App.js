import "./App.css";
import Card from "./Components/Card";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="wrapper">
      <div style={{display: "none"}} className="overlay">
       <Drawer/>
      </div>
      <Header/>
      <div className="content">
        <h1>All clothes</h1>
        <div className="search__block">
          <img src="" alt="Search" />
          <input placeholder="Search"/>
        </div>
        <div className="clothes">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
