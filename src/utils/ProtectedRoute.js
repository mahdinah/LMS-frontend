import React from "react";
import { Route, Redirect } from "react-router-dom";
import Routes from "../Components/Routes";

const PrivateRoute = ({ component: Routes, ...rest }) => {
  const isAuthenticated = false; // replace this with your authentication logic

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Routes {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

