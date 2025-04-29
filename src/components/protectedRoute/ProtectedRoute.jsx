import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, ...rest }) {
  const token = localStorage.getItem("token");
  let isAuthenticated = false;

  if (token) {
    isAuthenticated = true;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
