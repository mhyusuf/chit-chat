import React, { FunctionComponent } from "react";
import getAvatar from "../../utils/getAvatar";
import "./UserAvatar.scss";

const UserAvatar: FunctionComponent<any> = ({
  avatarString,
  smaller,
}: {
  avatarString: string;
  smaller: boolean | null;
}) => (
  <div className={`avatar-grand-wrapper ${smaller ? "smaller" : null}`}>
    <img src={getAvatar(avatarString)} alt="student avatar" />
  </div>
);
export default UserAvatar;
