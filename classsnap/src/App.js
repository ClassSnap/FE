import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";

//components
import Login from "./components/SignUp_Pages/User-signin";
import AddQuestionForm from "./components/Teacher-Dashboard/AddQuestionForm";
import ParentResponseForm from "./components//Parent-Dashboard/Parent-ResponseForm";
import ParentNewQuestionList from "./components/Parent-Dashboard/Parent-NewQuestionList";
import ParentAnsweredQuestionList from "./components/Parent-Dashboard/Parent-AnsweredQuestionList";
import QuestionResult from "./components/Teacher-Single-Class-Dashboard/QuestionResult";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>ClassSnap in Progress</h1>
        <Route exact path="/login" component={Login} />
        <Route exact path="/teacher/add-question" component={AddQuestionForm} />
        <Route
          exact
          path="/teacher/question-result"
          component={QuestionResult}
        />
        <Route
          exact
          path="/parent/response-form"
          component={ParentResponseForm}
        />
        <Route
          exact
          path="/parent/new-question-list"
          component={ParentNewQuestionList}
        />
        <Route
          exact
          path="/parent/answered-question-list"
          component={ParentAnsweredQuestionList}
        />
      </div>
    </Router>
  );
}

export default App;
