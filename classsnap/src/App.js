import React from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import Login from "./components/SignUp_Pages/User-signin";
import AddQuestionForm from "./components/Teacher-Dashboard/AddQuestionForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <AddQuestionForm />
        <h1>Test</h1>
      </header>
    </div>
  );
}

export default App;
