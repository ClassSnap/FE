import React from "react";

import "./App.css";

//components
import Login from "./components/SignUp_Pages/User-signin";
import AddQuestionForm from "./components/Teacher-Dashboard/AddQuestionForm";
import ParentResponseForm from "./components//Parent-Dashboard/Parent-ResponseForm";
import ParentNewQuestionList from "./components/Parent-Dashboard/Parent-NewQuestionList";

function App() {
  return (
    <div className="App">
      <Login />
      <AddQuestionForm />
      <ParentResponseForm />
      <ParentNewQuestionList />
    </div>
  );
}

export default App;
