import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { User } from "../../interfaces/reducerInterfaces";
import ActiveCourse from "../ActiveCourse";

import "./Nav.scss";

interface NavProps {
  isTeacher: boolean;
}

const Nav: FunctionComponent<NavProps> = ({ isTeacher }) => {
  const courseSelect = isTeacher ? <ActiveCourse /> : null;

  return (
    <div className="nav-grand-wrapper">
      {courseSelect}
      <div className="nav-grand-wrapper__link-wrapper">
        <NavLink to="/home">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            Recent Activity
          </p>
        </NavLink>
        <NavLink to="/rooms">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            Chat Rooms
          </p>
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

const mapStateToProps = ({ user }: { user: User }) => {
  return { isTeacher: user.isTeacher };
};

export default connect(mapStateToProps, {})(Nav);
