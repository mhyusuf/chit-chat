import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Header from "../components/Header";

const UnauthorizedApp: FunctionComponent<any> = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </>
  );
};

export default UnauthorizedApp;
