import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { User } from "../../interfaces/reducerInterfaces";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/index";
import "./Header.scss";
import UserAvatar from "../UserAvatar";

// get logout function
// onClick function to switch local state for avatar

const Header: FunctionComponent<any> = ({ user, logout }) => {
  const [avatarClicked, setAvatarClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    setAvatarClicked(!avatarClicked);
  };

  let history = useHistory();

  return (
    <div className="header-grand-wrapper">
      <div className="header-grand-wrapper__left-block">
        <h1>Chit Chat</h1>
        <div className="header-grand-wrapper__left-block__logo" />
      </div>
      {user.name && (
        <div className="header-grand-wrapper__right-block">
          <div className="header-grand-wrapper__right-block__user">
            <h3>{user.name}</h3>
            <div onClick={handleClick}>
              <UserAvatar
                avatarString={user.avatar}
                smaller={true}
                className="smaller"
              />
            </div>
          </div>
        </div>
      )}
      {avatarClicked && (
        <div className="header-grand-wrapper__drop-down-wrapper">
          {user.isTeacher && (
            <NavLink to={"/profile"}>
              <p onClick={handleClick}>profile</p>
            </NavLink>
          )}
          <p
            onClick={(e) => {
              handleClick(e);
              logout(history);
            }}
          >
            logout
          </p>
        </div>
      )}
    </div>
  );
};

function mapStateToProps({ user }: { user: User }) {
  return { user };
}

export default connect(mapStateToProps, { logout })(Header);
