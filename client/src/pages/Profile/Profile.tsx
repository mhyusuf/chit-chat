import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/index";
import { User } from "../../interfaces/reducerInterfaces";

import "./Profile.scss";

const Profile: FunctionComponent<any> = ({ history, logout, user }) => {
  return (
    <div className="profile-grand-wrapper">
      <div className="profile">
        <div className="profile__avatar" />
        <div className="profile__detail">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <button onClick={() => logout(history)}>Log out</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }: { user: User }) => {
  return { user };
};

export default connect(mapStateToProps, { logout })(Profile);
