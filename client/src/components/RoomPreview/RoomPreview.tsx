import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import "./RoomPreview.scss";

type RoomPreviewProps = {
  teamName: string;
  teamMembers: string[];
  unseenMessages: boolean;
  roomId: string;
};

const RoomPreview: FunctionComponent<RoomPreviewProps> = ({
  teamName,
  teamMembers,
  unseenMessages,
  roomId,
}) => {
  return (
    <NavLink to={`/rooms/${roomId}`} className="room-preview-nav-link">
      <div
        className={`room-preview-grand-wrapper ${
          unseenMessages ? null : "new-activity"
        }`}
      >
        <div className="room-preview-grand-wrapper__text">
          <h3>Chat Group:</h3>
          <h2 className="name">{teamName} Team</h2>
        </div>
        <div className="room-preview-grand-wrapper__student-names-wrapper">
          {teamMembers.map((student) => {
            return <p>{student}</p>;
          })}
        </div>
      </div>
    </NavLink>
  );
};

export default RoomPreview;
