import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginForm from "./Pages//Login/Login"
import Routes from "./Components/Routes";

function App() {
  return (
    <Router>
      <LoginForm />
    </Router>
  );
}

export default App;
