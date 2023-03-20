
import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import "./App.css";
import Login from './Pages/Login/Login';
// import Register from './Pages/Login/Register';
import Profile from './Pages/Admin_Panel/Profile';
import Routes from './Components/Routes'
import CreateAttendance from './Pages/Admin_Panel/Manage_Attendance/Create-Attendence';

import React, { useState, useEffect } from "react";
import { Link, Route, Routes as Routess, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
// import Register from './Pages/Login/Register';
import Profile from "./Pages/Admin_Panel/Profile";
import Routes from "./Components/Routes";


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLoggedIn(false);
    }
  }, [location]);

  return (

    <Switch>

      <Route path="/login">
        <Login setLoggedIn={setLoggedIn} />
      </Route>
      <Route path="/attendance/create">
        <CreateAttendance />
      </Route>
      <Routes />
 
    </Switch>
  );
};

export default App;
    <Routess>
      {/* <Route exact path="/">
        <Link to="/login" />
      </Route> */}
      {/* <Route path="/login">
        <Login setLoggedIn={setLoggedIn} />
      </Route> */}
      <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      <Route path="/profile" element={<Profile />} />
    </Routess>
  );
};

export default App;
