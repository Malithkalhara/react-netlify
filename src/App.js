import React from "react";
import { Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./components/home";
import ProtectedRoute from "./auth/protected-route";

import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1">
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;