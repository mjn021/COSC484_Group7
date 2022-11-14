import React from "react";
import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar";


function App() {
  return (
    <div className="App">
      <header>
      <p>
          TU Tunes
        </p>
        <img src="tiger.png" alt="Towson Logo" width="200" height="200"></img>
        </header>
      <Sidebar />
      
      
    </div>
  );
}

export default App;
