import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { User } from "../../interfaces/reducerInterfaces";
import "./Header.scss";
import UserAvatar from "../UserAvatar";

const teacher = {
  name: "Sr. Marquez",
};

const Header: FunctionComponent<any> = ({ user }: { user: User }) => {
  return (
    <div className="header-grand-wrapper">
      <div className="header-grand-wrapper__left-block">
        <h1>Chit Chat</h1>
        <div className="header-grand-wrapper__left-block__logo" />
      </div>
      <div className="header-grand-wrapper__right-block">
        <NavLink to="/profile">
          <h3>{user.name}</h3>
          <UserAvatar
            avatarString={user.avatar}
            smaller={true}
            className="smaller"
          />
        </NavLink>
      </div>
    </div>
  );
};

function mapStatetoProps({ user }: { user: User }) {
  return { user };
}

export default connect(mapStatetoProps, {})(Header);
