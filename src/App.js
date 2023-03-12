import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Routes from "./Components/Routes";
import ProtectedRoute from "./utils/ProtectedRoute";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Login onLogin={handleLogin} />
      <ProtectedRoute
        path="/protected"
        component={Routes}
        isAuthenticated={isAuthenticated}
      />
    </Router>
  );
}
