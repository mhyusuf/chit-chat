import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const teacher = {
  name: "Sr. Marquez",
};

const Header: FunctionComponent = () => {
  return (
    <div className="header-grand-wrapper">
      <div className="header-grand-wrapper__left-block">
        <h1>Chit Chat</h1>
      </div>
      <div className="header-grand-wrapper__right-block">
        <NavLink to="/profile">
          <h3>{teacher.name}</h3>
        </NavLink>
        <div className="header-grand-wrapper__right-block__avatar" />
      </div>
    </div>
  );
};

export default Header;
