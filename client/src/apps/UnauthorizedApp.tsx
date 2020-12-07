import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Header from "../components/Header";

const UnauthorizedApp: FunctionComponent<any> = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default UnauthorizedApp;
