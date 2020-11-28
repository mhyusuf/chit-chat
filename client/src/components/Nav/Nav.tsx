import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

const Nav: FunctionComponent = () => {
  //TODO: SELECT COURSE
  return (
    <div className="nav-grand-wrapper">
      <div className="nav-grand-wrapper__link-wrapper">
        <NavLink to="/home">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            Recent Activity
          </p>
        </NavLink>
        <NavLink to="/rooms">
          <p className="nav-grand-wrapper__link-wrapper__link-text">Chats</p>
        </NavLink>
        <NavLink to="/students">
          <p className="nav-grand-wrapper__link-wrapper__link-text">Students</p>
        </NavLink>
        <NavLink to="/tasks">
          <p className="nav-grand-wrapper__link-wrapper__link-text">Tasks</p>
        </NavLink>
        <NavLink to="/resources">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            Resources
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
