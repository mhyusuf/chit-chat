import React, { FunctionComponent } from "react";
import getAvatar from "../../utils/getAvatar";
import "./UserAvatar.scss";

const UserAvatar: FunctionComponent<any> = ({
  avatarString,
}: {
  avatarString: string;
}) => {
  return (
    <div className="avatar-grand-wrapper">
      <img src={getAvatar(avatarString)} alt="student avatar" />
    </div>
  );
};

export default UserAvatar;
