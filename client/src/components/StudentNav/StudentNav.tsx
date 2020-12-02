import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import "../Nav/Nav.scss";

const StudentNav: FunctionComponent = () => {
  //TODO: SELECT COURSE

  const student = { id: 2 };

  return (
    <div className="nav-grand-wrapper">
      <div className="nav-grand-wrapper__link-wrapper">
        <NavLink to="/home">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            Recent Activity
          </p>
        </NavLink>
        <NavLink to="/tasks">
          <p className="nav-grand-wrapper__link-wrapper__link-text">My Tasks</p>
        </NavLink>
        <NavLink to={`/rooms/${student.id}`}>
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            Group Chat
          </p>
        </NavLink>
        <NavLink to="/students">
          <p className="nav-grand-wrapper__link-wrapper__link-text">Class</p>
        </NavLink>
      </div>
    </div>
  );
};

export default StudentNav;
