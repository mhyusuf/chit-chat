import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import "./ChatPreview.scss";

type ChatPreviewProps = {
  teamName: string;
  teamMembers: string[];
  unseenMessages: boolean;
  roomId: string;
};

const ChatPreview: FunctionComponent<ChatPreviewProps> = ({
  teamName,
  teamMembers,
  unseenMessages,
  roomId,
}) => {
  return (
    <NavLink to={`/rooms/${roomId}`} className="chat-preview-nav-link">
      <div
        className={`chat-preview-grand-wrapper ${
          unseenMessages ? null : "new-activity"
        }`}
      >
        <div className="chat-preview-grand-wrapper__text">
          <h3>Chat Group:</h3>
          <h2 className="name">{teamName} Team</h2>
        </div>
        <div className="chat-preview-grand-wrapper__student-names-wrapper">
          {teamMembers.map((student) => {
            return <p>{student}</p>;
          })}
        </div>
      </div>
    </NavLink>
  );
};

export default ChatPreview;
