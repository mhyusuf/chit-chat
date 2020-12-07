import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

const UnauthorizedApp: FunctionComponent<any> = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default UnauthorizedApp;
