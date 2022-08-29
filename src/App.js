import SocialLinks from "./Social"
import Tabs from "./Components/TabComponent/Tabs";
import './App.css';
import React  from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4 className="title">Jaejin Cha</h4>
        <div className="headerLinks">
          <SocialLinks />
        </div>
      </header>
      <div className="body">
        <Tabs/>
      </div>       
      <footer>
        <SocialLinks/>
      </footer>
    </div>
  );
}

export default App;
