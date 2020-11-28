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
        <h2>Chat Group: {teamName} Team</h2>
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
