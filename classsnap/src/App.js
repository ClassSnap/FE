import React from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import Login from "./components/SignUp_Pages/User-signin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
