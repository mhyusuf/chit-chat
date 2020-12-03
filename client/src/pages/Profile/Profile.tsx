import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/index";

import "./Profile.scss";

const Profile: FunctionComponent<any> = ({ history, logout }) => {
  return (
    <div className="profile-grand-wrapper">
      <div className="profile">
        <div className="profile__avatar" />
        <div className="profile__detail">
          <h1>Sr. Marquez</h1>
          <p>Mexico City Secondary</p>
          <button onClick={() => logout(history)}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { logout })(Profile);
