import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import "./App.css";
import Login from './Pages/Login/Login';
// import Register from './Pages/Login/Register';
import Profile from './Pages/Admin_Panel/Profile';
import Routes from './Components/Routes'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setLoggedIn(false);
    }
  }, [location]);

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login setLoggedIn={setLoggedIn} />
      </Route>
      <Routes>
        <Route path="/profile">
          <Profile />      
        </Route>
      </Routes>
    </Switch>
  );
};

export default App;