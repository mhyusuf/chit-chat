import React, { FunctionComponent } from "react";
import getAvatar from "../../utils/getAvatar";
import "./UserAvatar.scss";

const UserAvatar: FunctionComponent<any> = ({
  avatarString,
  smaller,
  bigger,
}: {
  avatarString: string;
  smaller: boolean | null;
  bigger: boolean | null;
}) => (
  <div
    className={`avatar-grand-wrapper ${smaller ? "smaller" : null}  ${
      bigger ? "bigger" : null
    }`}
  >
    <img src={getAvatar(avatarString)} alt="student avatar" />
  </div>
);
export default UserAvatar;
