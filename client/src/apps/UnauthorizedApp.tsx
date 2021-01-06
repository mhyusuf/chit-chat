import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Header from "../components/Header";
import AdminApp from "./AdminApp";
import CourseCreate from "../pages/adminPages/CourseCreate";
import CourseEdit from "../pages/adminPages/CourseEdit";
import CourseDelete from "../pages/adminPages/CourseDelete";
import ResourceCreate from "../pages/adminPages/ResourceCreate";
import ResourceEdit from "../pages/adminPages/ResourceEdit";

const UnauthorizedApp: FunctionComponent<any> = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} />
        <Route exact path="/administrator" component={AdminApp} />
        <Route path="/administrator/create-course" component={CourseCreate} />
        <Route path="/administrator/edit-course" component={CourseEdit} />
        <Route path="/administrator/delete-course" component={CourseDelete} />
        <Route
          path="/administrator/create-resource"
          component={ResourceCreate}
        />
        <Route path="/administrator/edit-resource" component={ResourceEdit} />
      </Switch>
    </>
  );
};

export default UnauthorizedApp;
