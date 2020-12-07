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
        <NavLink to="/assignments">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            My Assignments
          </p>
        </NavLink>
        <NavLink to={`/rooms/${student.id}`}>
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            Team Chat
          </p>
        </NavLink>
        <NavLink to="/students">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            Teammates
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default StudentNav;
