import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import "./RoomPreview.scss";

type RoomPreviewProps = {
  teamName: string;
  teamMembers: string[];
  roomId: number;
  unseenMessages: boolean;
};

const RoomPreview: FunctionComponent<RoomPreviewProps> = ({
  teamName,
  teamMembers,
  roomId,
  unseenMessages,
}) => {
  return (
    <NavLink to={`/rooms/${roomId}`} className="room-preview-nav-link">
      <div
        className={`room-preview-grand-wrapper ${
          unseenMessages ? "new-activity" : null
        }`}
      >
        <div className="room-preview-grand-wrapper__text">
          <h2 className="name">{teamName} Team</h2>
        </div>
        <div className="room-preview-grand-wrapper__student-names-wrapper">
          {teamMembers &&
            teamMembers.map((student, i) => {
              return <p key={i}>{student}</p>;
            })}
        </div>
      </div>
    </NavLink>
  );
};

export default RoomPreview;
