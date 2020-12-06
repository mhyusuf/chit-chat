import moment from "moment";
import React, { FunctionComponent } from "react";
import UserAvatar from "../UserAvatar";
import "./Message.scss";
// {sender: {name: 'Matt', avatar: 'MH'},
// text_content: 'Hola amigos! ¿Qué tal?',
// timeSent: 'today', self: true},

const Message: FunctionComponent<any> = (props) => {
  const { sender, content, createdAt, type } = props.message;

  const messageContent =
    type === "text" ? (
      <>
        <p className="text">{content}</p>
        <div className="tiny-text">
          <p>{sender.name}</p>
          <p className="timestamp">{moment(createdAt).format("H:mm")}</p>
        </div>
      </>
    ) : (
      <>
        <audio className="audioMessage" src={content} controls />
        <div className="tiny-text">
          <p>{sender.name}</p>
          <p className="timestamp">{moment(createdAt).format("H:mm")}</p>
        </div>
      </>
    );
  return props.self ? (
    <>
      <div className="message-grand-wrapper__message-block">
        {messageContent}
      </div>
      <div className="message-grand-wrapper__avatar-wrapper">
        <UserAvatar avatarString={sender.avatar} />
      </div>
    </>
  ) : (
    <>
      <div className="message-grand-wrapper__avatar-wrapper">
        <UserAvatar avatarString={sender.avatar} />
      </div>
      <div className="message-grand-wrapper__message-block">
        {messageContent}
      </div>
    </>
  );
};

export default Message;
