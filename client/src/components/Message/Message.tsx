import moment from "moment";
import React, { FunctionComponent } from "react";
import "./Message.scss";
// {sender: {name: 'Matt', avatar: 'MH'},
// text_content: 'Hola amigos! ¿Qué tal?',
// timeSent: 'today', self: true},

const Message: FunctionComponent<any> = (props) => {
  const { sender, content, createdAt, contentType } = props.message;

  const messageContent =
    contentType === "text" ? (
      <>
        <p className="text">{content}</p>
        <p className="timestamp">{moment(createdAt).format("h:mm")}</p>
      </>
    ) : (
      <>
        <audio className="audioMessage" src={content} controls />
        <p className="timestamp">{moment(createdAt).format("h:mm")}</p>
      </>
    );
  return props.self ? (
    <>
      <div className="message-grand-wrapper__message-block">
        {messageContent}
      </div>
      <div className="message-grand-wrapper__avatar-wrapper">
        <div className="message-grand-wrapper__avatar-wrapper__avatar" />
      </div>
    </>
  ) : (
    <>
      <div className="message-grand-wrapper__avatar-wrapper">
        <div className="message-grand-wrapper__avatar-wrapper__avatar" />
      </div>
      <div className="message-grand-wrapper__message-block">
        {messageContent}
      </div>
    </>
  );
};

export default Message;
