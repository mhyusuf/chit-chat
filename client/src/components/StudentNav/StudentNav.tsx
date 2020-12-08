import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import "../Nav/Nav.scss";

interface StudentNavProps {
  roomId: number;
}

const StudentNav: FunctionComponent<StudentNavProps> = (props) => {
  const { roomId } = props;

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
        <NavLink to={`/rooms/${roomId}`}>
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
