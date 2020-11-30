import React, { FunctionComponent } from "react";

import "./Profile.scss";

const Profile: FunctionComponent<any> = () => {
  return (
    <div className="profile-grand-wrapper">
      <div className="profile">
        <div className="profile__avatar" />
        <div className="profile__detail">
          <h1>Sr. Marquez</h1>
          <p>Mexico City Secondary</p>
          <button>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
